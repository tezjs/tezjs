import { commonContainer } from "@tezjs/common"
import { defaultContainer } from "../const/core.const";
import { PaginationConfig } from "@tezjs/types"
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";
import { getChecksum } from "../utils/get-checksum";

export class CollectionIndexer {
    pagination: PaginationConfig;
    pathResolver: PathResolver;
    constructor() {
        this.pagination = commonContainer.getStrapiConfig().pagination;
        this.pathResolver = new PathResolver();
    }

    async paginate(source: Array<{ [key: string]: any }>, collectionName: string, filterString: string,pagination:boolean) {
        let index = 1;
        const filterKey = `${collectionName}-${filterString}`.toLowerCase();;
        let folderKey: string = getChecksum(filterKey);
        if ((filterString && !defaultContainer.filterCollectionState[filterKey]) || (!filterString && !defaultContainer.collectionState[collectionName])) {
            let totalCount =  source.length;
            do {
                const pageSize = pagination ? source.length : source.length > this.pagination.pageSize ? this.pagination.pageSize : source.length;
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