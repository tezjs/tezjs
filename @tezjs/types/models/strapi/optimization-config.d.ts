import { SourcePaginationByUrl } from "./source-pagination-by-url";
export interface OptimizationConfig {
    sourcePagination: boolean;
    sourcePaginationByUrl?: SourcePaginationByUrl[];
}
