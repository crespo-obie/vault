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
 * @interface PkiIssuersGenerateRootRequest
 */
export interface PkiIssuersGenerateRootRequest {
  /**
   * The requested Subject Alternative Names, if any, in a comma-delimited list. May contain both DNS names and email addresses.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  altNames?: string;
  /**
   * The requested common name; if you want more than one, specify the alternative names in the alt_names map. If not specified when signing, the common name will be taken from the CSR; other names must still be specified in alt_names or ip_sans.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  commonName?: string;
  /**
   * If set, Country will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  country?: Array<string>;
  /**
   * If true, the Common Name will not be included in DNS or Email Subject Alternate Names. Defaults to false (CN is included).
   * @type {boolean}
   * @memberof PkiIssuersGenerateRootRequest
   */
  excludeCnFromSans?: boolean;
  /**
   * Domains for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  excludedDnsDomains?: Array<string>;
  /**
   * Email addresses for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  excludedEmailAddresses?: Array<string>;
  /**
   * IP ranges for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10). Ranges must be specified in the notation of IP address and prefix length, like "192.0.2.0/24" or "2001:db8::/32", as defined in RFC 4632 and RFC 4291.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  excludedIpRanges?: Array<string>;
  /**
   * URI domains for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  excludedUriDomains?: Array<string>;
  /**
   * Format for returned data. Can be "pem", "der", or "pem_bundle". If "pem_bundle", any private key and issuing cert will be appended to the certificate pem. If "der", the value will be base64 encoded. Defaults to "pem".
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  format?: PkiIssuersGenerateRootRequestFormatEnum;
  /**
   * The requested IP SANs, if any, in a comma-delimited list
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  ipSans?: Array<string>;
  /**
   * Provide a name to the generated or existing issuer, the name must be unique across all issuers and not be the reserved value 'default'
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  issuerName?: string;
  /**
   * The number of bits to use. Allowed values are 0 (universal default); with rsa key_type: 2048 (default), 3072, 4096 or 8192; with ec key_type: 224, 256 (default), 384, or 521; ignored with ed25519.
   * @type {number}
   * @memberof PkiIssuersGenerateRootRequest
   */
  keyBits?: number;
  /**
   * Provide a name to the generated or existing key, the name must be unique across all keys and not be the reserved value 'default'
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  keyName?: string;
  /**
   * Reference to a existing key; either "default" for the configured default key, an identifier or the name assigned to the key.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  keyRef?: string;
  /**
   * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  keyType?: PkiIssuersGenerateRootRequestKeyTypeEnum;
  /**
   * This list of key usages (not extended key usages) will be added to the existing set of key usages, CRL,CertSign, on the generated certificate. Valid values can be found at https://golang.org/pkg/crypto/x509/#KeyUsage -- simply drop the "KeyUsage" part of the name. To use the issuer for CMPv2, DigitalSignature must be set.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  keyUsage?: Array<string>;
  /**
   * If set, Locality will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  locality?: Array<string>;
  /**
   * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_name is required. Ignored for other types.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  managedKeyId?: string;
  /**
   * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_id is required. Ignored for other types.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  managedKeyName?: string;
  /**
   * The maximum allowable path length
   * @type {number}
   * @memberof PkiIssuersGenerateRootRequest
   */
  maxPathLength?: number;
  /**
   * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  notAfter?: string;
  /**
   * The duration before now which the certificate needs to be backdated by.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  notBeforeDuration?: string;
  /**
   * If set, O (Organization) will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  organization?: Array<string>;
  /**
   * Requested other SANs, in an array with the format <oid>;UTF8:<utf8 string value> for each entry.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  otherSans?: Array<string>;
  /**
   * If set, OU (OrganizationalUnit) will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  ou?: Array<string>;
  /**
   * Domains for which this certificate is allowed to sign or issue child certificates. If set, all DNS names (subject and alt) on child certs must be exact matches or subsets of the given domains (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  permittedDnsDomains?: Array<string>;
  /**
   * Email addresses for which this certificate is allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  permittedEmailAddresses?: Array<string>;
  /**
   * IP ranges for which this certificate is allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10). Ranges must be specified in the notation of IP address and prefix length, like "192.0.2.0/24" or "2001:db8::/32", as defined in RFC 4632 and RFC 4291.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  permittedIpRanges?: Array<string>;
  /**
   * URI domains for which this certificate is allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  permittedUriDomains?: Array<string>;
  /**
   * If set, Postal Code will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  postalCode?: Array<string>;
  /**
   * Format for the returned private key. Generally the default will be controlled by the "format" parameter as either base64-encoded DER or PEM-encoded DER. However, this can be set to "pkcs8" to have the returned private key contain base64-encoded pkcs8 or PEM-encoded pkcs8 instead. Defaults to "der".
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  privateKeyFormat?: PkiIssuersGenerateRootRequestPrivateKeyFormatEnum;
  /**
   * If set, Province will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  province?: Array<string>;
  /**
   * The Subject's requested serial number, if any. See RFC 4519 Section 2.31 'serialNumber' for a description of this field. If you want more than one, specify alternative names in the alt_names map using OID 2.5.4.5. This has no impact on the final certificate's Serial Number field.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  serialNumber?: string;
  /**
   * The number of bits to use in the signature algorithm; accepts 256 for SHA-2-256, 384 for SHA-2-384, and 512 for SHA-2-512. Defaults to 0 to automatically detect based on key length (SHA-2-256 for RSA keys, and matching the curve size for NIST P-Curves).
   * @type {number}
   * @memberof PkiIssuersGenerateRootRequest
   */
  signatureBits?: number;
  /**
   * If set, Street Address will be set to this value.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  streetAddress?: Array<string>;
  /**
   * The requested Time To Live for the certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be larger than the mount max TTL. Note: this only has an effect when generating a CA cert or signing a CA cert, not when generating a CSR for an intermediate CA.
   * @type {string}
   * @memberof PkiIssuersGenerateRootRequest
   */
  ttl?: string;
  /**
   * The requested URI SANs, if any, in a comma-delimited list.
   * @type {Array<string>}
   * @memberof PkiIssuersGenerateRootRequest
   */
  uriSans?: Array<string>;
  /**
   * Whether or not to use PSS signatures when using a RSA key-type issuer. Defaults to false.
   * @type {boolean}
   * @memberof PkiIssuersGenerateRootRequest
   */
  usePss?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum PkiIssuersGenerateRootRequestFormatEnum {
  PEM = 'pem',
  DER = 'der',
  PEM_BUNDLE = 'pem_bundle',
}
/**
 * @export
 * @enum {string}
 */
export enum PkiIssuersGenerateRootRequestKeyTypeEnum {
  RSA = 'rsa',
  EC = 'ec',
  ED25519 = 'ed25519',
}
/**
 * @export
 * @enum {string}
 */
export enum PkiIssuersGenerateRootRequestPrivateKeyFormatEnum {
  EMPTY = '',
  DER = 'der',
  PEM = 'pem',
  PKCS8 = 'pkcs8',
}

/**
 * Check if a given object implements the PkiIssuersGenerateRootRequest interface.
 */
export function instanceOfPkiIssuersGenerateRootRequest(
  value: object
): value is PkiIssuersGenerateRootRequest {
  return true;
}

export function PkiIssuersGenerateRootRequestFromJSON(json: any): PkiIssuersGenerateRootRequest {
  return PkiIssuersGenerateRootRequestFromJSONTyped(json, false);
}

export function PkiIssuersGenerateRootRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiIssuersGenerateRootRequest {
  if (json == null) {
    return json;
  }
  return {
    altNames: json['alt_names'] == null ? undefined : json['alt_names'],
    commonName: json['common_name'] == null ? undefined : json['common_name'],
    country: json['country'] == null ? undefined : json['country'],
    excludeCnFromSans: json['exclude_cn_from_sans'] == null ? undefined : json['exclude_cn_from_sans'],
    excludedDnsDomains: json['excluded_dns_domains'] == null ? undefined : json['excluded_dns_domains'],
    excludedEmailAddresses:
      json['excluded_email_addresses'] == null ? undefined : json['excluded_email_addresses'],
    excludedIpRanges: json['excluded_ip_ranges'] == null ? undefined : json['excluded_ip_ranges'],
    excludedUriDomains: json['excluded_uri_domains'] == null ? undefined : json['excluded_uri_domains'],
    format: json['format'] == null ? undefined : json['format'],
    ipSans: json['ip_sans'] == null ? undefined : json['ip_sans'],
    issuerName: json['issuer_name'] == null ? undefined : json['issuer_name'],
    keyBits: json['key_bits'] == null ? undefined : json['key_bits'],
    keyName: json['key_name'] == null ? undefined : json['key_name'],
    keyRef: json['key_ref'] == null ? undefined : json['key_ref'],
    keyType: json['key_type'] == null ? undefined : json['key_type'],
    keyUsage: json['key_usage'] == null ? undefined : json['key_usage'],
    locality: json['locality'] == null ? undefined : json['locality'],
    managedKeyId: json['managed_key_id'] == null ? undefined : json['managed_key_id'],
    managedKeyName: json['managed_key_name'] == null ? undefined : json['managed_key_name'],
    maxPathLength: json['max_path_length'] == null ? undefined : json['max_path_length'],
    notAfter: json['not_after'] == null ? undefined : json['not_after'],
    notBeforeDuration: json['not_before_duration'] == null ? undefined : json['not_before_duration'],
    organization: json['organization'] == null ? undefined : json['organization'],
    otherSans: json['other_sans'] == null ? undefined : json['other_sans'],
    ou: json['ou'] == null ? undefined : json['ou'],
    permittedDnsDomains: json['permitted_dns_domains'] == null ? undefined : json['permitted_dns_domains'],
    permittedEmailAddresses:
      json['permitted_email_addresses'] == null ? undefined : json['permitted_email_addresses'],
    permittedIpRanges: json['permitted_ip_ranges'] == null ? undefined : json['permitted_ip_ranges'],
    permittedUriDomains: json['permitted_uri_domains'] == null ? undefined : json['permitted_uri_domains'],
    postalCode: json['postal_code'] == null ? undefined : json['postal_code'],
    privateKeyFormat: json['private_key_format'] == null ? undefined : json['private_key_format'],
    province: json['province'] == null ? undefined : json['province'],
    serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
    signatureBits: json['signature_bits'] == null ? undefined : json['signature_bits'],
    streetAddress: json['street_address'] == null ? undefined : json['street_address'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
    uriSans: json['uri_sans'] == null ? undefined : json['uri_sans'],
    usePss: json['use_pss'] == null ? undefined : json['use_pss'],
  };
}

export function PkiIssuersGenerateRootRequestToJSON(json: any): PkiIssuersGenerateRootRequest {
  return PkiIssuersGenerateRootRequestToJSONTyped(json, false);
}

export function PkiIssuersGenerateRootRequestToJSONTyped(
  value?: PkiIssuersGenerateRootRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    alt_names: value['altNames'],
    common_name: value['commonName'],
    country: value['country'],
    exclude_cn_from_sans: value['excludeCnFromSans'],
    excluded_dns_domains: value['excludedDnsDomains'],
    excluded_email_addresses: value['excludedEmailAddresses'],
    excluded_ip_ranges: value['excludedIpRanges'],
    excluded_uri_domains: value['excludedUriDomains'],
    format: value['format'],
    ip_sans: value['ipSans'],
    issuer_name: value['issuerName'],
    key_bits: value['keyBits'],
    key_name: value['keyName'],
    key_ref: value['keyRef'],
    key_type: value['keyType'],
    key_usage: value['keyUsage'],
    locality: value['locality'],
    managed_key_id: value['managedKeyId'],
    managed_key_name: value['managedKeyName'],
    max_path_length: value['maxPathLength'],
    not_after: value['notAfter'],
    not_before_duration: value['notBeforeDuration'],
    organization: value['organization'],
    other_sans: value['otherSans'],
    ou: value['ou'],
    permitted_dns_domains: value['permittedDnsDomains'],
    permitted_email_addresses: value['permittedEmailAddresses'],
    permitted_ip_ranges: value['permittedIpRanges'],
    permitted_uri_domains: value['permittedUriDomains'],
    postal_code: value['postalCode'],
    private_key_format: value['privateKeyFormat'],
    province: value['province'],
    serial_number: value['serialNumber'],
    signature_bits: value['signatureBits'],
    street_address: value['streetAddress'],
    ttl: value['ttl'],
    uri_sans: value['uriSans'],
    use_pss: value['usePss'],
  };
}
