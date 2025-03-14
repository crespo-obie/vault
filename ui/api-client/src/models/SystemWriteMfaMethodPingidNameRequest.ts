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
 * @interface SystemWriteMfaMethodPingidNameRequest
 */
export interface SystemWriteMfaMethodPingidNameRequest {
  /**
   * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
   * @type {string}
   * @memberof SystemWriteMfaMethodPingidNameRequest
   */
  mountAccessor?: string;
  /**
   * The settings file provided by Ping, Base64-encoded. This must be a settings file suitable for third-party clients, not the PingID SDK or PingFederate.
   * @type {string}
   * @memberof SystemWriteMfaMethodPingidNameRequest
   */
  settingsFileBase64?: string;
  /**
   * A format string for mapping Identity names to MFA method names. Values to subtitute should be placed in {{}}. For example, "{{alias.name}}@example.com". Currently-supported mappings: alias.name: The name returned by the mount configured via the mount_accessor parameter If blank, the Alias's name field will be used as-is.
   * @type {string}
   * @memberof SystemWriteMfaMethodPingidNameRequest
   */
  usernameFormat?: string;
}

/**
 * Check if a given object implements the SystemWriteMfaMethodPingidNameRequest interface.
 */
export function instanceOfSystemWriteMfaMethodPingidNameRequest(
  value: object
): value is SystemWriteMfaMethodPingidNameRequest {
  return true;
}

export function SystemWriteMfaMethodPingidNameRequestFromJSON(
  json: any
): SystemWriteMfaMethodPingidNameRequest {
  return SystemWriteMfaMethodPingidNameRequestFromJSONTyped(json, false);
}

export function SystemWriteMfaMethodPingidNameRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemWriteMfaMethodPingidNameRequest {
  if (json == null) {
    return json;
  }
  return {
    mountAccessor: json['mount_accessor'] == null ? undefined : json['mount_accessor'],
    settingsFileBase64: json['settings_file_base64'] == null ? undefined : json['settings_file_base64'],
    usernameFormat: json['username_format'] == null ? undefined : json['username_format'],
  };
}

export function SystemWriteMfaMethodPingidNameRequestToJSON(
  json: any
): SystemWriteMfaMethodPingidNameRequest {
  return SystemWriteMfaMethodPingidNameRequestToJSONTyped(json, false);
}

export function SystemWriteMfaMethodPingidNameRequestToJSONTyped(
  value?: SystemWriteMfaMethodPingidNameRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    mount_accessor: value['mountAccessor'],
    settings_file_base64: value['settingsFileBase64'],
    username_format: value['usernameFormat'],
  };
}
