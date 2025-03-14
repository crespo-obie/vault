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
 * @interface SystemReadSyncDestinationsGhNameResponse
 */
export interface SystemReadSyncDestinationsGhNameResponse {
  /**
   * List of key value pairs of information necessary to connect with the external system.
   * @type {object}
   * @memberof SystemReadSyncDestinationsGhNameResponse
   */
  connectionDetails?: object;
  /**
   * Name of this secrets store.
   * @type {string}
   * @memberof SystemReadSyncDestinationsGhNameResponse
   */
  name?: string;
  /**
   * Type of this secrets store.
   * @type {string}
   * @memberof SystemReadSyncDestinationsGhNameResponse
   */
  type?: string;
}

/**
 * Check if a given object implements the SystemReadSyncDestinationsGhNameResponse interface.
 */
export function instanceOfSystemReadSyncDestinationsGhNameResponse(
  value: object
): value is SystemReadSyncDestinationsGhNameResponse {
  return true;
}

export function SystemReadSyncDestinationsGhNameResponseFromJSON(
  json: any
): SystemReadSyncDestinationsGhNameResponse {
  return SystemReadSyncDestinationsGhNameResponseFromJSONTyped(json, false);
}

export function SystemReadSyncDestinationsGhNameResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemReadSyncDestinationsGhNameResponse {
  if (json == null) {
    return json;
  }
  return {
    connectionDetails: json['connection_details'] == null ? undefined : json['connection_details'],
    name: json['name'] == null ? undefined : json['name'],
    type: json['type'] == null ? undefined : json['type'],
  };
}

export function SystemReadSyncDestinationsGhNameResponseToJSON(
  json: any
): SystemReadSyncDestinationsGhNameResponse {
  return SystemReadSyncDestinationsGhNameResponseToJSONTyped(json, false);
}

export function SystemReadSyncDestinationsGhNameResponseToJSONTyped(
  value?: SystemReadSyncDestinationsGhNameResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    connection_details: value['connectionDetails'],
    name: value['name'],
    type: value['type'],
  };
}
