import { defaultContainer } from "../const/core.const";
import { PaginationConfig } from "../interface/pagination-config"
import cleanObject from "../sanitizers/clean-object.sanitizer";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";

export class CollectionIndexer {
    pagination: PaginationConfig;
    pathResolver: PathResolver;
    constructor() {
        this.pagination = defaultContainer.moduleOptions.pagination;
        this.pathResolver = new PathResolver();
    }

    async paginate(source: Array<{ [key: string]: any }>, collectionName: string, filterString: string) {
        let index = 1;
        const filterKey = `${collectionName}-${filterString}`.toLowerCase();;
        let folderKey: string = defaultContainer.getUniqueId();
        if ((filterString && !defaultContainer.filterCollectionState[filterKey]) || (!filterString && !defaultContainer.collectionState[collectionName])) {
            let totalCount = source.length;
            do {
                const pageSize = source.length > this.pagination.pageSize ? this.pagination.pageSize : source.length;
                const sourceItems = source.splice(0, pageSize);
                let filePath = `${this.pathResolver.getCollectionPayloadPath(collectionName)}/${index}.json`;
                if (filterString)
                    filePath = `${this.pathResolver.getFilterCollectionPayloadPath(folderKey)}/${index}.json`
                else
                    defaultContainer.collectionState[collectionName] = true;
                await writeFileSync(filePath,{ items:sourceItems, totalCount:totalCount });
                index++;
            } while (source.length > 0)
        }

        if (filterString) {
            if (!defaultContainer.filterCollectionState[filterKey])
                defaultContainer.filterCollectionState[filterKey] = folderKey;
            else
                folderKey = defaultContainer.filterCollectionState[filterKey]
        }
        return filterString ? `filter-collections/${folderKey}` : `collections/${collectionName}`;
    }
}