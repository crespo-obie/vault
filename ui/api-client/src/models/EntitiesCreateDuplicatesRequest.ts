/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface EntitiesCreateDuplicatesRequest
 */
export interface EntitiesCreateDuplicatesRequest {
  /**
   * Number of entities to create
   * @type {number}
   * @memberof EntitiesCreateDuplicatesRequest
   */
  count?: number;
  /**
   * Create entities with different case variations
   * @type {boolean}
   * @memberof EntitiesCreateDuplicatesRequest
   */
  differentCase?: boolean;
  /**
   * Metadata to be associated with the entity. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
   * @type {object}
   * @memberof EntitiesCreateDuplicatesRequest
   */
  metadata?: object;
  /**
   * Name of the entities to create
   * @type {string}
   * @memberof EntitiesCreateDuplicatesRequest
   */
  name?: string;
  /**
   * NamespaceID of the entities to create
   * @type {string}
   * @memberof EntitiesCreateDuplicatesRequest
   */
  namespaceId?: string;
  /**
   * Policies to be tied to the entity.
   * @type {Array<string>}
   * @memberof EntitiesCreateDuplicatesRequest
   */
  policies?: Array<string>;
}

/**
 * Check if a given object implements the EntitiesCreateDuplicatesRequest interface.
 */
export function instanceOfEntitiesCreateDuplicatesRequest(
  value: object
): value is EntitiesCreateDuplicatesRequest {
  return true;
}

export function EntitiesCreateDuplicatesRequestFromJSON(json: any): EntitiesCreateDuplicatesRequest {
  return EntitiesCreateDuplicatesRequestFromJSONTyped(json, false);
}

export function EntitiesCreateDuplicatesRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EntitiesCreateDuplicatesRequest {
  if (json == null) {
    return json;
  }
  return {
    count: json['count'] == null ? undefined : json['count'],
    differentCase: json['different_case'] == null ? undefined : json['different_case'],
    metadata: json['metadata'] == null ? undefined : json['metadata'],
    name: json['name'] == null ? undefined : json['name'],
    namespaceId: json['namespace_id'] == null ? undefined : json['namespace_id'],
    policies: json['policies'] == null ? undefined : json['policies'],
  };
}

export function EntitiesCreateDuplicatesRequestToJSON(json: any): EntitiesCreateDuplicatesRequest {
  return EntitiesCreateDuplicatesRequestToJSONTyped(json, false);
}

export function EntitiesCreateDuplicatesRequestToJSONTyped(
  value?: EntitiesCreateDuplicatesRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value['count'],
    different_case: value['differentCase'],
    metadata: value['metadata'],
    name: value['name'],
    namespace_id: value['namespaceId'],
    policies: value['policies'],
  };
}
