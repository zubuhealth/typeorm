import { getMetadataArgsStorage } from "../../globals"
import { ColumnMetadataArgs } from "../../metadata-args/ColumnMetadataArgs"
import { ColumnOptions } from "../options/ColumnOptions"

/**
 * This column will store a tenant.
 */
export function TenantColumn(options?: ColumnOptions): PropertyDecorator {
    return function (object: Object, propertyName: string) {
        getMetadataArgsStorage().columns.push({
            target: object.constructor,
            propertyName: propertyName,
            mode: "tenant",
            options: options || {},
        } as ColumnMetadataArgs)
    }
}
