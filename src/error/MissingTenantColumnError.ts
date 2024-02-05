import { EntityMetadata } from "../metadata/EntityMetadata"
import { TypeORMError } from "./TypeORMError"

export class MissingTenantColumnError extends TypeORMError {
    constructor(entityMetadata: EntityMetadata) {
        super(`Entity "${entityMetadata.name}" does not have tenant column.`)
    }
}
