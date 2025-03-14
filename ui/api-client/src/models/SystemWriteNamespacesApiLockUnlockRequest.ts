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
 * @interface SystemWriteNamespacesApiLockUnlockRequest
 */
export interface SystemWriteNamespacesApiLockUnlockRequest {
  /**
   * Key to unlock the namespace.
   * @type {string}
   * @memberof SystemWriteNamespacesApiLockUnlockRequest
   */
  unlockKey?: string;
}

/**
 * Check if a given object implements the SystemWriteNamespacesApiLockUnlockRequest interface.
 */
export function instanceOfSystemWriteNamespacesApiLockUnlockRequest(
  value: object
): value is SystemWriteNamespacesApiLockUnlockRequest {
  return true;
}

export function SystemWriteNamespacesApiLockUnlockRequestFromJSON(
  json: any
): SystemWriteNamespacesApiLockUnlockRequest {
  return SystemWriteNamespacesApiLockUnlockRequestFromJSONTyped(json, false);
}

export function SystemWriteNamespacesApiLockUnlockRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemWriteNamespacesApiLockUnlockRequest {
  if (json == null) {
    return json;
  }
  return {
    unlockKey: json['unlock_key'] == null ? undefined : json['unlock_key'],
  };
}

export function SystemWriteNamespacesApiLockUnlockRequestToJSON(
  json: any
): SystemWriteNamespacesApiLockUnlockRequest {
  return SystemWriteNamespacesApiLockUnlockRequestToJSONTyped(json, false);
}

export function SystemWriteNamespacesApiLockUnlockRequestToJSONTyped(
  value?: SystemWriteNamespacesApiLockUnlockRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    unlock_key: value['unlockKey'],
  };
}
