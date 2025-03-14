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
 * @interface SystemWriteReplicationDrSecondaryReindexRequest
 */
export interface SystemWriteReplicationDrSecondaryReindexRequest {
  /**
   * Enables a slower re-indexing which will perform a key level check to diagnose issues. Defaults false.
   * @type {boolean}
   * @memberof SystemWriteReplicationDrSecondaryReindexRequest
   */
  diff?: boolean;
  /**
   * DR operation token used to authorize this request.
   * @type {string}
   * @memberof SystemWriteReplicationDrSecondaryReindexRequest
   */
  drOperationToken?: string;
  /**
   * Forces a complete re-indexing which only scans data available in the storage. Defaults false.
   * @type {boolean}
   * @memberof SystemWriteReplicationDrSecondaryReindexRequest
   */
  force?: boolean;
  /**
   * Skips the tree flushing stage of the reindex process. This setting can be used to reduce the amount of time the tree is locked during a reindex process. If this node is killed before the full tree has been asynchronously flushed the reindex may not have applied fully and a new reindex may need to be done. Shutting down this node cleanly will cause the tree to be flushed prior to shutdown. Defaults false.
   * @type {boolean}
   * @memberof SystemWriteReplicationDrSecondaryReindexRequest
   */
  skipFlush?: boolean;
}

/**
 * Check if a given object implements the SystemWriteReplicationDrSecondaryReindexRequest interface.
 */
export function instanceOfSystemWriteReplicationDrSecondaryReindexRequest(
  value: object
): value is SystemWriteReplicationDrSecondaryReindexRequest {
  return true;
}

export function SystemWriteReplicationDrSecondaryReindexRequestFromJSON(
  json: any
): SystemWriteReplicationDrSecondaryReindexRequest {
  return SystemWriteReplicationDrSecondaryReindexRequestFromJSONTyped(json, false);
}

export function SystemWriteReplicationDrSecondaryReindexRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemWriteReplicationDrSecondaryReindexRequest {
  if (json == null) {
    return json;
  }
  return {
    diff: json['diff'] == null ? undefined : json['diff'],
    drOperationToken: json['dr_operation_token'] == null ? undefined : json['dr_operation_token'],
    force: json['force'] == null ? undefined : json['force'],
    skipFlush: json['skip_flush'] == null ? undefined : json['skip_flush'],
  };
}

export function SystemWriteReplicationDrSecondaryReindexRequestToJSON(
  json: any
): SystemWriteReplicationDrSecondaryReindexRequest {
  return SystemWriteReplicationDrSecondaryReindexRequestToJSONTyped(json, false);
}

export function SystemWriteReplicationDrSecondaryReindexRequestToJSONTyped(
  value?: SystemWriteReplicationDrSecondaryReindexRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    diff: value['diff'],
    dr_operation_token: value['drOperationToken'],
    force: value['force'],
    skip_flush: value['skipFlush'],
  };
}
