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
 * @interface PersonaUpdateByIdRequest
 */
export interface PersonaUpdateByIdRequest {
  /**
   * Entity ID to which this persona should be tied to
   * @type {string}
   * @memberof PersonaUpdateByIdRequest
   */
  entityId?: string;
  /**
   * Metadata to be associated with the persona. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
   * @type {object}
   * @memberof PersonaUpdateByIdRequest
   */
  metadata?: object;
  /**
   * Mount accessor to which this persona belongs to
   * @type {string}
   * @memberof PersonaUpdateByIdRequest
   */
  mountAccessor?: string;
  /**
   * Name of the persona
   * @type {string}
   * @memberof PersonaUpdateByIdRequest
   */
  name?: string;
}

/**
 * Check if a given object implements the PersonaUpdateByIdRequest interface.
 */
export function instanceOfPersonaUpdateByIdRequest(value: object): value is PersonaUpdateByIdRequest {
  return true;
}

export function PersonaUpdateByIdRequestFromJSON(json: any): PersonaUpdateByIdRequest {
  return PersonaUpdateByIdRequestFromJSONTyped(json, false);
}

export function PersonaUpdateByIdRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PersonaUpdateByIdRequest {
  if (json == null) {
    return json;
  }
  return {
    entityId: json['entity_id'] == null ? undefined : json['entity_id'],
    metadata: json['metadata'] == null ? undefined : json['metadata'],
    mountAccessor: json['mount_accessor'] == null ? undefined : json['mount_accessor'],
    name: json['name'] == null ? undefined : json['name'],
  };
}

export function PersonaUpdateByIdRequestToJSON(json: any): PersonaUpdateByIdRequest {
  return PersonaUpdateByIdRequestToJSONTyped(json, false);
}

export function PersonaUpdateByIdRequestToJSONTyped(
  value?: PersonaUpdateByIdRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    entity_id: value['entityId'],
    metadata: value['metadata'],
    mount_accessor: value['mountAccessor'],
    name: value['name'],
  };
}
