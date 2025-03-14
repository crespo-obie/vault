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
 * @interface GroupCreateAliasRequest
 */
export interface GroupCreateAliasRequest {
  /**
   * ID of the group to which this is an alias.
   * @type {string}
   * @memberof GroupCreateAliasRequest
   */
  canonicalId?: string;
  /**
   * ID of the group alias.
   * @type {string}
   * @memberof GroupCreateAliasRequest
   */
  id?: string;
  /**
   * Mount accessor to which this alias belongs to.
   * @type {string}
   * @memberof GroupCreateAliasRequest
   */
  mountAccessor?: string;
  /**
   * Alias of the group.
   * @type {string}
   * @memberof GroupCreateAliasRequest
   */
  name?: string;
}

/**
 * Check if a given object implements the GroupCreateAliasRequest interface.
 */
export function instanceOfGroupCreateAliasRequest(value: object): value is GroupCreateAliasRequest {
  return true;
}

export function GroupCreateAliasRequestFromJSON(json: any): GroupCreateAliasRequest {
  return GroupCreateAliasRequestFromJSONTyped(json, false);
}

export function GroupCreateAliasRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GroupCreateAliasRequest {
  if (json == null) {
    return json;
  }
  return {
    canonicalId: json['canonical_id'] == null ? undefined : json['canonical_id'],
    id: json['id'] == null ? undefined : json['id'],
    mountAccessor: json['mount_accessor'] == null ? undefined : json['mount_accessor'],
    name: json['name'] == null ? undefined : json['name'],
  };
}

export function GroupCreateAliasRequestToJSON(json: any): GroupCreateAliasRequest {
  return GroupCreateAliasRequestToJSONTyped(json, false);
}

export function GroupCreateAliasRequestToJSONTyped(
  value?: GroupCreateAliasRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    canonical_id: value['canonicalId'],
    id: value['id'],
    mount_accessor: value['mountAccessor'],
    name: value['name'],
  };
}
