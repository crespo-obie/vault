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
 * @interface PkiIssueWithRoleRequest
 */
export interface PkiIssueWithRoleRequest {
  /**
   * The requested Subject Alternative Names, if any, in a comma-delimited list. If email protection is enabled for the role, this may contain email addresses.
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  altNames?: string;
  /**
   * User supplied metadata to store associated with this certificate's serial number, base64 encoded
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  certMetadata?: string;
  /**
   * The requested common name; if you want more than one, specify the alternative names in the alt_names map. If email protection is enabled in the role, this may be an email address.
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  commonName?: string;
  /**
   * If true, the Common Name will not be included in DNS or Email Subject Alternate Names. Defaults to false (CN is included).
   * @type {boolean}
   * @memberof PkiIssueWithRoleRequest
   */
  excludeCnFromSans?: boolean;
  /**
   * Format for returned data. Can be "pem", "der", or "pem_bundle". If "pem_bundle", any private key and issuing cert will be appended to the certificate pem. If "der", the value will be base64 encoded. Defaults to "pem".
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  format?: PkiIssueWithRoleRequestFormatEnum;
  /**
   * The requested IP SANs, if any, in a comma-delimited list
   * @type {Array<string>}
   * @memberof PkiIssueWithRoleRequest
   */
  ipSans?: Array<string>;
  /**
   * Reference to a existing issuer; either "default" for the configured default issuer, an identifier or the name assigned to the issuer.
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  issuerRef?: string;
  /**
   * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  notAfter?: string;
  /**
   * Requested other SANs, in an array with the format <oid>;UTF8:<utf8 string value> for each entry.
   * @type {Array<string>}
   * @memberof PkiIssueWithRoleRequest
   */
  otherSans?: Array<string>;
  /**
   * Format for the returned private key. Generally the default will be controlled by the "format" parameter as either base64-encoded DER or PEM-encoded DER. However, this can be set to "pkcs8" to have the returned private key contain base64-encoded pkcs8 or PEM-encoded pkcs8 instead. Defaults to "der".
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  privateKeyFormat?: PkiIssueWithRoleRequestPrivateKeyFormatEnum;
  /**
   * Whether or not to remove self-signed CA certificates in the output of the ca_chain field.
   * @type {boolean}
   * @memberof PkiIssueWithRoleRequest
   */
  removeRootsFromChain?: boolean;
  /**
   * The Subject's requested serial number, if any. See RFC 4519 Section 2.31 'serialNumber' for a description of this field. If you want more than one, specify alternative names in the alt_names map using OID 2.5.4.5. This has no impact on the final certificate's Serial Number field.
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  serialNumber?: string;
  /**
   * The requested Time To Live for the certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be larger than the role max TTL.
   * @type {string}
   * @memberof PkiIssueWithRoleRequest
   */
  ttl?: string;
  /**
   * The requested URI SANs, if any, in a comma-delimited list.
   * @type {Array<string>}
   * @memberof PkiIssueWithRoleRequest
   */
  uriSans?: Array<string>;
  /**
   * The requested user_ids value to place in the subject, if any, in a comma-delimited list. Restricted by allowed_user_ids. Any values are added with OID 0.9.2342.19200300.100.1.1.
   * @type {Array<string>}
   * @memberof PkiIssueWithRoleRequest
   */
  userIds?: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum PkiIssueWithRoleRequestFormatEnum {
  PEM = 'pem',
  DER = 'der',
  PEM_BUNDLE = 'pem_bundle',
}
/**
 * @export
 * @enum {string}
 */
export enum PkiIssueWithRoleRequestPrivateKeyFormatEnum {
  EMPTY = '',
  DER = 'der',
  PEM = 'pem',
  PKCS8 = 'pkcs8',
}

/**
 * Check if a given object implements the PkiIssueWithRoleRequest interface.
 */
export function instanceOfPkiIssueWithRoleRequest(value: object): value is PkiIssueWithRoleRequest {
  return true;
}

export function PkiIssueWithRoleRequestFromJSON(json: any): PkiIssueWithRoleRequest {
  return PkiIssueWithRoleRequestFromJSONTyped(json, false);
}

export function PkiIssueWithRoleRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiIssueWithRoleRequest {
  if (json == null) {
    return json;
  }
  return {
    altNames: json['alt_names'] == null ? undefined : json['alt_names'],
    certMetadata: json['cert_metadata'] == null ? undefined : json['cert_metadata'],
    commonName: json['common_name'] == null ? undefined : json['common_name'],
    excludeCnFromSans: json['exclude_cn_from_sans'] == null ? undefined : json['exclude_cn_from_sans'],
    format: json['format'] == null ? undefined : json['format'],
    ipSans: json['ip_sans'] == null ? undefined : json['ip_sans'],
    issuerRef: json['issuer_ref'] == null ? undefined : json['issuer_ref'],
    notAfter: json['not_after'] == null ? undefined : json['not_after'],
    otherSans: json['other_sans'] == null ? undefined : json['other_sans'],
    privateKeyFormat: json['private_key_format'] == null ? undefined : json['private_key_format'],
    removeRootsFromChain:
      json['remove_roots_from_chain'] == null ? undefined : json['remove_roots_from_chain'],
    serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
    uriSans: json['uri_sans'] == null ? undefined : json['uri_sans'],
    userIds: json['user_ids'] == null ? undefined : json['user_ids'],
  };
}

export function PkiIssueWithRoleRequestToJSON(json: any): PkiIssueWithRoleRequest {
  return PkiIssueWithRoleRequestToJSONTyped(json, false);
}

export function PkiIssueWithRoleRequestToJSONTyped(
  value?: PkiIssueWithRoleRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    alt_names: value['altNames'],
    cert_metadata: value['certMetadata'],
    common_name: value['commonName'],
    exclude_cn_from_sans: value['excludeCnFromSans'],
    format: value['format'],
    ip_sans: value['ipSans'],
    issuer_ref: value['issuerRef'],
    not_after: value['notAfter'],
    other_sans: value['otherSans'],
    private_key_format: value['privateKeyFormat'],
    remove_roots_from_chain: value['removeRootsFromChain'],
    serial_number: value['serialNumber'],
    ttl: value['ttl'],
    uri_sans: value['uriSans'],
    user_ids: value['userIds'],
  };
}
