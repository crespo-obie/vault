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
 * @interface SystemWriteReplicationPerformanceSecondaryPromoteRequest
 */
export interface SystemWriteReplicationPerformanceSecondaryPromoteRequest {
  /**
   * Set to true if the cluster should be promoted despite replication being in an error state. This could mean some data was not replicated to the secondary
   * @type {boolean}
   * @memberof SystemWriteReplicationPerformanceSecondaryPromoteRequest
   */
  force?: boolean;
  /**
   * The address the secondary cluster should connect to. Defaults to the primary's cluster address.
   * @type {string}
   * @memberof SystemWriteReplicationPerformanceSecondaryPromoteRequest
   */
  primaryClusterAddr?: string;
}

/**
 * Check if a given object implements the SystemWriteReplicationPerformanceSecondaryPromoteRequest interface.
 */
export function instanceOfSystemWriteReplicationPerformanceSecondaryPromoteRequest(
  value: object
): value is SystemWriteReplicationPerformanceSecondaryPromoteRequest {
  return true;
}

export function SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSON(
  json: any
): SystemWriteReplicationPerformanceSecondaryPromoteRequest {
  return SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSONTyped(json, false);
}

export function SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemWriteReplicationPerformanceSecondaryPromoteRequest {
  if (json == null) {
    return json;
  }
  return {
    force: json['force'] == null ? undefined : json['force'],
    primaryClusterAddr: json['primary_cluster_addr'] == null ? undefined : json['primary_cluster_addr'],
  };
}

export function SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSON(
  json: any
): SystemWriteReplicationPerformanceSecondaryPromoteRequest {
  return SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSONTyped(json, false);
}

export function SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSONTyped(
  value?: SystemWriteReplicationPerformanceSecondaryPromoteRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    force: value['force'],
    primary_cluster_addr: value['primaryClusterAddr'],
  };
}
