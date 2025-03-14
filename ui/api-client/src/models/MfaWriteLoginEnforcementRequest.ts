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
 * @interface MfaWriteLoginEnforcementRequest
 */
export interface MfaWriteLoginEnforcementRequest {
  /**
   * Array of auth mount accessor IDs
   * @type {Array<string>}
   * @memberof MfaWriteLoginEnforcementRequest
   */
  authMethodAccessors?: Array<string>;
  /**
   * Array of auth mount types
   * @type {Array<string>}
   * @memberof MfaWriteLoginEnforcementRequest
   */
  authMethodTypes?: Array<string>;
  /**
   * Array of identity entity IDs
   * @type {Array<string>}
   * @memberof MfaWriteLoginEnforcementRequest
   */
  identityEntityIds?: Array<string>;
  /**
   * Array of identity group IDs
   * @type {Array<string>}
   * @memberof MfaWriteLoginEnforcementRequest
   */
  identityGroupIds?: Array<string>;
  /**
   * Array of Method IDs that determine what methods will be enforced
   * @type {Array<string>}
   * @memberof MfaWriteLoginEnforcementRequest
   */
  mfaMethodIds: Array<string>;
}

/**
 * Check if a given object implements the MfaWriteLoginEnforcementRequest interface.
 */
export function instanceOfMfaWriteLoginEnforcementRequest(
  value: object
): value is MfaWriteLoginEnforcementRequest {
  if (!('mfaMethodIds' in value) || value['mfaMethodIds'] === undefined) return false;
  return true;
}

export function MfaWriteLoginEnforcementRequestFromJSON(json: any): MfaWriteLoginEnforcementRequest {
  return MfaWriteLoginEnforcementRequestFromJSONTyped(json, false);
}

export function MfaWriteLoginEnforcementRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MfaWriteLoginEnforcementRequest {
  if (json == null) {
    return json;
  }
  return {
    authMethodAccessors: json['auth_method_accessors'] == null ? undefined : json['auth_method_accessors'],
    authMethodTypes: json['auth_method_types'] == null ? undefined : json['auth_method_types'],
    identityEntityIds: json['identity_entity_ids'] == null ? undefined : json['identity_entity_ids'],
    identityGroupIds: json['identity_group_ids'] == null ? undefined : json['identity_group_ids'],
    mfaMethodIds: json['mfa_method_ids'],
  };
}

export function MfaWriteLoginEnforcementRequestToJSON(json: any): MfaWriteLoginEnforcementRequest {
  return MfaWriteLoginEnforcementRequestToJSONTyped(json, false);
}

export function MfaWriteLoginEnforcementRequestToJSONTyped(
  value?: MfaWriteLoginEnforcementRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    auth_method_accessors: value['authMethodAccessors'],
    auth_method_types: value['authMethodTypes'],
    identity_entity_ids: value['identityEntityIds'],
    identity_group_ids: value['identityGroupIds'],
    mfa_method_ids: value['mfaMethodIds'],
  };
}
