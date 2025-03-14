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
 * @interface AwsWriteAuthRoleRequest
 */
export interface AwsWriteAuthRoleRequest {
  /**
   * If set, allows migration of the underlying instance where the client resides. This keys off of pendingTime in the metadata document, so essentially, this disables the client nonce check whenever the instance is migrated to a new host and pendingTime is newer than the previously-remembered time. Use with caution. This is only checked when auth_type is ec2.
   * @type {boolean}
   * @memberof AwsWriteAuthRoleRequest
   */
  allowInstanceMigration?: boolean;
  /**
   * The auth_type permitted to authenticate to this role. Must be one of iam or ec2 and cannot be changed after role creation.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  authType?: string;
  /**
   * If set, defines a constraint on the EC2 instances that the account ID in its identity document to match one of the IDs specified by this parameter. This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundAccountId?: Array<string>;
  /**
   * If set, defines a constraint on the EC2 instances that they should be using one of the AMI IDs specified by this parameter. This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundAmiId?: Array<string>;
  /**
   * If set, defines a constraint on the EC2 instances to have one of the given instance IDs. Can be a list or comma-separated string of EC2 instance IDs. This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundEc2InstanceId?: Array<string>;
  /**
   * If set, defines a constraint on the EC2 instances to be associated with an IAM instance profile ARN which has a prefix that matches one of the values specified by this parameter. The value is prefix-matched (as though it were a glob ending in '*'). This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundIamInstanceProfileArn?: Array<string>;
  /**
   * ARN of the IAM principals to bind to this role. Only applicable when auth_type is iam.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundIamPrincipalArn?: Array<string>;
  /**
   * If set, defines a constraint on the authenticating EC2 instance that it must match one of the IAM role ARNs specified by this parameter. The value is prefix-matched (as though it were a glob ending in '*'). The configured IAM user or EC2 instance role must be allowed to execute the 'iam:GetInstanceProfile' action if this is specified. This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundIamRoleArn?: Array<string>;
  /**
   * If set, defines a constraint on the EC2 instances that the region in its identity document match one of the regions specified by this parameter. This is only applicable when auth_type is ec2.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundRegion?: Array<string>;
  /**
   * If set, defines a constraint on the EC2 instance to be associated with the subnet ID that matches one of the values specified by this parameter. This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundSubnetId?: Array<string>;
  /**
   * If set, defines a constraint on the EC2 instance to be associated with a VPC ID that matches one of the value specified by this parameter. This is only applicable when auth_type is ec2 or inferred_entity_type is ec2_instance.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  boundVpcId?: Array<string>;
  /**
   * If set, only allows a single token to be granted per instance ID. In order to perform a fresh login, the entry in the access list for the instance ID needs to be cleared using 'auth/aws-ec2/identity-accesslist/<instance_id>' endpoint. This is only applicable when auth_type is ec2.
   * @type {boolean}
   * @memberof AwsWriteAuthRoleRequest
   */
  disallowReauthentication?: boolean;
  /**
   * When auth_type is iam and inferred_entity_type is set, the region to assume the inferred entity exists in.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  inferredAwsRegion?: string;
  /**
   * When auth_type is iam, the AWS entity type to infer from the authenticated principal. The only supported value is ec2_instance, which will extract the EC2 instance ID from the authenticated role and apply the following restrictions specific to EC2 instances: bound_ami_id, bound_account_id, bound_iam_role_arn, bound_iam_instance_profile_arn, bound_vpc_id, bound_subnet_id. The configured EC2 client must be able to find the inferred instance ID in the results, and the instance must be running. If unable to determine the EC2 instance ID or unable to find the EC2 instance ID among running instances, then authentication will fail.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  inferredEntityType?: string;
  /**
   * Use "token_max_ttl" instead. If this and "token_max_ttl" are both specified, only "token_max_ttl" will be used.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   * @deprecated
   */
  maxTtl?: string;
  /**
   * Use "token_period" instead. If this and "token_period" are both specified, only "token_period" will be used.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   * @deprecated
   */
  period?: string;
  /**
   * Use "token_policies" instead. If this and "token_policies" are both specified, only "token_policies" will be used.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   * @deprecated
   */
  policies?: Array<string>;
  /**
   * If set, resolve all AWS IAM ARNs into AWS's internal unique IDs. When an IAM entity (e.g., user, role, or instance profile) is deleted, then all references to it within the role will be invalidated, which prevents a new IAM entity from being created with the same name and matching the role's IAM binds. Once set, this cannot be unset.
   * @type {boolean}
   * @memberof AwsWriteAuthRoleRequest
   */
  resolveAwsUniqueIds?: boolean;
  /**
   * If set, enables the role tags for this role. The value set for this field should be the 'key' of the tag on the EC2 instance. The 'value' of the tag should be generated using 'role/<role>/tag' endpoint. Defaults to an empty string, meaning that role tags are disabled. This is only allowed if auth_type is ec2.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  roleTag?: string;
  /**
   * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenBoundCidrs?: Array<string>;
  /**
   * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenExplicitMaxTtl?: string;
  /**
   * The maximum lifetime of the generated token
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenMaxTtl?: string;
  /**
   * If true, the 'default' policy will not automatically be added to generated tokens
   * @type {boolean}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenNoDefaultPolicy?: boolean;
  /**
   * The maximum number of times a token may be used, a value of zero means unlimited
   * @type {number}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenNumUses?: number;
  /**
   * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenPeriod?: string;
  /**
   * Comma-separated list of policies
   * @type {Array<string>}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenPolicies?: Array<string>;
  /**
   * The initial ttl of the token to generate
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenTtl?: string;
  /**
   * The type of token to generate, service or batch
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   */
  tokenType?: string;
  /**
   * Use "token_ttl" instead. If this and "token_ttl" are both specified, only "token_ttl" will be used.
   * @type {string}
   * @memberof AwsWriteAuthRoleRequest
   * @deprecated
   */
  ttl?: string;
}

/**
 * Check if a given object implements the AwsWriteAuthRoleRequest interface.
 */
export function instanceOfAwsWriteAuthRoleRequest(value: object): value is AwsWriteAuthRoleRequest {
  return true;
}

export function AwsWriteAuthRoleRequestFromJSON(json: any): AwsWriteAuthRoleRequest {
  return AwsWriteAuthRoleRequestFromJSONTyped(json, false);
}

export function AwsWriteAuthRoleRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AwsWriteAuthRoleRequest {
  if (json == null) {
    return json;
  }
  return {
    allowInstanceMigration:
      json['allow_instance_migration'] == null ? undefined : json['allow_instance_migration'],
    authType: json['auth_type'] == null ? undefined : json['auth_type'],
    boundAccountId: json['bound_account_id'] == null ? undefined : json['bound_account_id'],
    boundAmiId: json['bound_ami_id'] == null ? undefined : json['bound_ami_id'],
    boundEc2InstanceId: json['bound_ec2_instance_id'] == null ? undefined : json['bound_ec2_instance_id'],
    boundIamInstanceProfileArn:
      json['bound_iam_instance_profile_arn'] == null ? undefined : json['bound_iam_instance_profile_arn'],
    boundIamPrincipalArn:
      json['bound_iam_principal_arn'] == null ? undefined : json['bound_iam_principal_arn'],
    boundIamRoleArn: json['bound_iam_role_arn'] == null ? undefined : json['bound_iam_role_arn'],
    boundRegion: json['bound_region'] == null ? undefined : json['bound_region'],
    boundSubnetId: json['bound_subnet_id'] == null ? undefined : json['bound_subnet_id'],
    boundVpcId: json['bound_vpc_id'] == null ? undefined : json['bound_vpc_id'],
    disallowReauthentication:
      json['disallow_reauthentication'] == null ? undefined : json['disallow_reauthentication'],
    inferredAwsRegion: json['inferred_aws_region'] == null ? undefined : json['inferred_aws_region'],
    inferredEntityType: json['inferred_entity_type'] == null ? undefined : json['inferred_entity_type'],
    maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
    period: json['period'] == null ? undefined : json['period'],
    policies: json['policies'] == null ? undefined : json['policies'],
    resolveAwsUniqueIds: json['resolve_aws_unique_ids'] == null ? undefined : json['resolve_aws_unique_ids'],
    roleTag: json['role_tag'] == null ? undefined : json['role_tag'],
    tokenBoundCidrs: json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
    tokenExplicitMaxTtl: json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
    tokenMaxTtl: json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
    tokenNoDefaultPolicy:
      json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
    tokenNumUses: json['token_num_uses'] == null ? undefined : json['token_num_uses'],
    tokenPeriod: json['token_period'] == null ? undefined : json['token_period'],
    tokenPolicies: json['token_policies'] == null ? undefined : json['token_policies'],
    tokenTtl: json['token_ttl'] == null ? undefined : json['token_ttl'],
    tokenType: json['token_type'] == null ? undefined : json['token_type'],
    ttl: json['ttl'] == null ? undefined : json['ttl'],
  };
}

export function AwsWriteAuthRoleRequestToJSON(json: any): AwsWriteAuthRoleRequest {
  return AwsWriteAuthRoleRequestToJSONTyped(json, false);
}

export function AwsWriteAuthRoleRequestToJSONTyped(
  value?: AwsWriteAuthRoleRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    allow_instance_migration: value['allowInstanceMigration'],
    auth_type: value['authType'],
    bound_account_id: value['boundAccountId'],
    bound_ami_id: value['boundAmiId'],
    bound_ec2_instance_id: value['boundEc2InstanceId'],
    bound_iam_instance_profile_arn: value['boundIamInstanceProfileArn'],
    bound_iam_principal_arn: value['boundIamPrincipalArn'],
    bound_iam_role_arn: value['boundIamRoleArn'],
    bound_region: value['boundRegion'],
    bound_subnet_id: value['boundSubnetId'],
    bound_vpc_id: value['boundVpcId'],
    disallow_reauthentication: value['disallowReauthentication'],
    inferred_aws_region: value['inferredAwsRegion'],
    inferred_entity_type: value['inferredEntityType'],
    max_ttl: value['maxTtl'],
    period: value['period'],
    policies: value['policies'],
    resolve_aws_unique_ids: value['resolveAwsUniqueIds'],
    role_tag: value['roleTag'],
    token_bound_cidrs: value['tokenBoundCidrs'],
    token_explicit_max_ttl: value['tokenExplicitMaxTtl'],
    token_max_ttl: value['tokenMaxTtl'],
    token_no_default_policy: value['tokenNoDefaultPolicy'],
    token_num_uses: value['tokenNumUses'],
    token_period: value['tokenPeriod'],
    token_policies: value['tokenPolicies'],
    token_ttl: value['tokenTtl'],
    token_type: value['tokenType'],
    ttl: value['ttl'],
  };
}
