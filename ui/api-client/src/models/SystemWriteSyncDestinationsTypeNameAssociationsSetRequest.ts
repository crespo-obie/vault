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
 * @interface SystemWriteSyncDestinationsTypeNameAssociationsSetRequest
 */
export interface SystemWriteSyncDestinationsTypeNameAssociationsSetRequest {
  /**
   * Mount of the secret to configure or read.
   * @type {string}
   * @memberof SystemWriteSyncDestinationsTypeNameAssociationsSetRequest
   */
  mount?: string;
  /**
   * Name of the secret to configure or read.
   * @type {string}
   * @memberof SystemWriteSyncDestinationsTypeNameAssociationsSetRequest
   */
  secretName?: string;
}

/**
 * Check if a given object implements the SystemWriteSyncDestinationsTypeNameAssociationsSetRequest interface.
 */
export function instanceOfSystemWriteSyncDestinationsTypeNameAssociationsSetRequest(
  value: object
): value is SystemWriteSyncDestinationsTypeNameAssociationsSetRequest {
  return true;
}

export function SystemWriteSyncDestinationsTypeNameAssociationsSetRequestFromJSON(
  json: any
): SystemWriteSyncDestinationsTypeNameAssociationsSetRequest {
  return SystemWriteSyncDestinationsTypeNameAssociationsSetRequestFromJSONTyped(json, false);
}

export function SystemWriteSyncDestinationsTypeNameAssociationsSetRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemWriteSyncDestinationsTypeNameAssociationsSetRequest {
  if (json == null) {
    return json;
  }
  return {
    mount: json['mount'] == null ? undefined : json['mount'],
    secretName: json['secret_name'] == null ? undefined : json['secret_name'],
  };
}

export function SystemWriteSyncDestinationsTypeNameAssociationsSetRequestToJSON(
  json: any
): SystemWriteSyncDestinationsTypeNameAssociationsSetRequest {
  return SystemWriteSyncDestinationsTypeNameAssociationsSetRequestToJSONTyped(json, false);
}

export function SystemWriteSyncDestinationsTypeNameAssociationsSetRequestToJSONTyped(
  value?: SystemWriteSyncDestinationsTypeNameAssociationsSetRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    mount: value['mount'],
    secret_name: value['secretName'],
  };
}
