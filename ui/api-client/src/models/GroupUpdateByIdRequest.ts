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
 * @interface GroupUpdateByIdRequest
 */
export interface GroupUpdateByIdRequest {
  /**
   * Entity IDs to be assigned as group members.
   * @type {Array<string>}
   * @memberof GroupUpdateByIdRequest
   */
  memberEntityIds?: Array<string>;
  /**
   * Group IDs to be assigned as group members.
   * @type {Array<string>}
   * @memberof GroupUpdateByIdRequest
   */
  memberGroupIds?: Array<string>;
  /**
   * Metadata to be associated with the group. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
   * @type {object}
   * @memberof GroupUpdateByIdRequest
   */
  metadata?: object;
  /**
   * Name of the group.
   * @type {string}
   * @memberof GroupUpdateByIdRequest
   */
  name?: string;
  /**
   * Policies to be tied to the group.
   * @type {Array<string>}
   * @memberof GroupUpdateByIdRequest
   */
  policies?: Array<string>;
  /**
   * Type of the group, 'internal' or 'external'. Defaults to 'internal'
   * @type {string}
   * @memberof GroupUpdateByIdRequest
   */
  type?: string;
}

/**
 * Check if a given object implements the GroupUpdateByIdRequest interface.
 */
export function instanceOfGroupUpdateByIdRequest(value: object): value is GroupUpdateByIdRequest {
  return true;
}

export function GroupUpdateByIdRequestFromJSON(json: any): GroupUpdateByIdRequest {
  return GroupUpdateByIdRequestFromJSONTyped(json, false);
}

export function GroupUpdateByIdRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GroupUpdateByIdRequest {
  if (json == null) {
    return json;
  }
  return {
    memberEntityIds: json['member_entity_ids'] == null ? undefined : json['member_entity_ids'],
    memberGroupIds: json['member_group_ids'] == null ? undefined : json['member_group_ids'],
    metadata: json['metadata'] == null ? undefined : json['metadata'],
    name: json['name'] == null ? undefined : json['name'],
    policies: json['policies'] == null ? undefined : json['policies'],
    type: json['type'] == null ? undefined : json['type'],
  };
}

export function GroupUpdateByIdRequestToJSON(json: any): GroupUpdateByIdRequest {
  return GroupUpdateByIdRequestToJSONTyped(json, false);
}

export function GroupUpdateByIdRequestToJSONTyped(
  value?: GroupUpdateByIdRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    member_entity_ids: value['memberEntityIds'],
    member_group_ids: value['memberGroupIds'],
    metadata: value['metadata'],
    name: value['name'],
    policies: value['policies'],
    type: value['type'],
  };
}
