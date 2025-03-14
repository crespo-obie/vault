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
 * @interface MountsEnableSecretsEngineRequest
 */
export interface MountsEnableSecretsEngineRequest {
  /**
   * Configuration for this mount, such as default_lease_ttl and max_lease_ttl.
   * @type {object}
   * @memberof MountsEnableSecretsEngineRequest
   */
  config?: object;
  /**
   * User-friendly description for this mount.
   * @type {string}
   * @memberof MountsEnableSecretsEngineRequest
   */
  description?: string;
  /**
   * Whether to give the mount access to Vault's external entropy.
   * @type {boolean}
   * @memberof MountsEnableSecretsEngineRequest
   */
  externalEntropyAccess?: boolean;
  /**
   * Mark the mount as a local mount, which is not replicated and is unaffected by replication.
   * @type {boolean}
   * @memberof MountsEnableSecretsEngineRequest
   */
  local?: boolean;
  /**
   * The options to pass into the backend. Should be a json object with string keys and values.
   * @type {object}
   * @memberof MountsEnableSecretsEngineRequest
   */
  options?: object;
  /**
   * Name of the plugin to mount based from the name registered in the plugin catalog.
   * @type {string}
   * @memberof MountsEnableSecretsEngineRequest
   */
  pluginName?: string;
  /**
   * The semantic version of the plugin to use, or image tag if oci_image is provided.
   * @type {string}
   * @memberof MountsEnableSecretsEngineRequest
   */
  pluginVersion?: string;
  /**
   * Whether to turn on seal wrapping for the mount.
   * @type {boolean}
   * @memberof MountsEnableSecretsEngineRequest
   */
  sealWrap?: boolean;
  /**
   * The type of the backend. Example: "passthrough"
   * @type {string}
   * @memberof MountsEnableSecretsEngineRequest
   */
  type?: string;
}

/**
 * Check if a given object implements the MountsEnableSecretsEngineRequest interface.
 */
export function instanceOfMountsEnableSecretsEngineRequest(
  value: object
): value is MountsEnableSecretsEngineRequest {
  return true;
}

export function MountsEnableSecretsEngineRequestFromJSON(json: any): MountsEnableSecretsEngineRequest {
  return MountsEnableSecretsEngineRequestFromJSONTyped(json, false);
}

export function MountsEnableSecretsEngineRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MountsEnableSecretsEngineRequest {
  if (json == null) {
    return json;
  }
  return {
    config: json['config'] == null ? undefined : json['config'],
    description: json['description'] == null ? undefined : json['description'],
    externalEntropyAccess:
      json['external_entropy_access'] == null ? undefined : json['external_entropy_access'],
    local: json['local'] == null ? undefined : json['local'],
    options: json['options'] == null ? undefined : json['options'],
    pluginName: json['plugin_name'] == null ? undefined : json['plugin_name'],
    pluginVersion: json['plugin_version'] == null ? undefined : json['plugin_version'],
    sealWrap: json['seal_wrap'] == null ? undefined : json['seal_wrap'],
    type: json['type'] == null ? undefined : json['type'],
  };
}

export function MountsEnableSecretsEngineRequestToJSON(json: any): MountsEnableSecretsEngineRequest {
  return MountsEnableSecretsEngineRequestToJSONTyped(json, false);
}

export function MountsEnableSecretsEngineRequestToJSONTyped(
  value?: MountsEnableSecretsEngineRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    config: value['config'],
    description: value['description'],
    external_entropy_access: value['externalEntropyAccess'],
    local: value['local'],
    options: value['options'],
    plugin_name: value['pluginName'],
    plugin_version: value['pluginVersion'],
    seal_wrap: value['sealWrap'],
    type: value['type'],
  };
}
