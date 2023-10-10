/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 *  Welcome to the **Polar API** for [polar.sh](https://polar.sh).  The Public API is currently a [work in progress](https://github.com/polarsource/polar/issues/834) and is in active development. 🚀  #### Authentication  Use a [Personal Access Token](https://polar.sh/settings) and send it in the `Authorization` header on the format `Bearer [YOUR_TOKEN]`.  #### Feedback  If you have any feedback or comments, reach out in the [Polar API-issue](https://github.com/polarsource/polar/issues/834), or reach out on the Polar Discord server.  We\'d love to see what you\'ve built with the API and to get your thoughts on how we can make the API better!  #### Connecting  The Polar API is online at `https://api.polar.sh`. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BackofficeBadge,
  BackofficeBadgeResponse,
  BackofficePledge,
  BackofficeReward,
  HTTPValidationError,
  Issue,
  ListResourceBackofficeReward,
  OrganizationPrivateRead,
  PledgeRewardTransfer,
} from '../models/index';
import {
    BackofficeBadgeFromJSON,
    BackofficeBadgeToJSON,
    BackofficeBadgeResponseFromJSON,
    BackofficeBadgeResponseToJSON,
    BackofficePledgeFromJSON,
    BackofficePledgeToJSON,
    BackofficeRewardFromJSON,
    BackofficeRewardToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    IssueFromJSON,
    IssueToJSON,
    ListResourceBackofficeRewardFromJSON,
    ListResourceBackofficeRewardToJSON,
    OrganizationPrivateReadFromJSON,
    OrganizationPrivateReadToJSON,
    PledgeRewardTransferFromJSON,
    PledgeRewardTransferToJSON,
} from '../models/index';

export interface BackofficeApiIssueRequest {
    id: string;
}

export interface BackofficeApiManageBadgeRequest {
    backofficeBadge: BackofficeBadge;
}

export interface BackofficeApiOrganizationSyncRequest {
    name: string;
}

export interface BackofficeApiPledgeCreateInvoiceRequest {
    pledgeId: string;
}

export interface BackofficeApiPledgeMarkDisputedRequest {
    pledgeId: string;
}

export interface BackofficeApiPledgeRewardTransferRequest {
    pledgeRewardTransfer: PledgeRewardTransfer;
}

export interface BackofficeApiRewardsRequest {
    issueId?: string;
}

/**
 * 
 */
export class BackofficeApi extends runtime.BaseAPI {

    /**
     * Issue
     */
    async issueRaw(requestParameters: BackofficeApiIssueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling issue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/issue/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IssueFromJSON(jsonValue));
    }

    /**
     * Issue
     */
    async issue(requestParameters: BackofficeApiIssueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.issueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Manage Badge
     */
    async manageBadgeRaw(requestParameters: BackofficeApiManageBadgeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackofficeBadgeResponse>> {
        if (requestParameters.backofficeBadge === null || requestParameters.backofficeBadge === undefined) {
            throw new runtime.RequiredError('backofficeBadge','Required parameter requestParameters.backofficeBadge was null or undefined when calling manageBadge.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/badge`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BackofficeBadgeToJSON(requestParameters.backofficeBadge),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackofficeBadgeResponseFromJSON(jsonValue));
    }

    /**
     * Manage Badge
     */
    async manageBadge(requestParameters: BackofficeApiManageBadgeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackofficeBadgeResponse> {
        const response = await this.manageBadgeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Organization Sync
     */
    async organizationSyncRaw(requestParameters: BackofficeApiOrganizationSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationPrivateRead>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling organizationSync.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/organization/sync/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationPrivateReadFromJSON(jsonValue));
    }

    /**
     * Organization Sync
     */
    async organizationSync(requestParameters: BackofficeApiOrganizationSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationPrivateRead> {
        const response = await this.organizationSyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pledge Create Invoice
     */
    async pledgeCreateInvoiceRaw(requestParameters: BackofficeApiPledgeCreateInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackofficePledge>> {
        if (requestParameters.pledgeId === null || requestParameters.pledgeId === undefined) {
            throw new runtime.RequiredError('pledgeId','Required parameter requestParameters.pledgeId was null or undefined when calling pledgeCreateInvoice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/pledges/create_invoice/{pledge_id}`.replace(`{${"pledge_id"}}`, encodeURIComponent(String(requestParameters.pledgeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackofficePledgeFromJSON(jsonValue));
    }

    /**
     * Pledge Create Invoice
     */
    async pledgeCreateInvoice(requestParameters: BackofficeApiPledgeCreateInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackofficePledge> {
        const response = await this.pledgeCreateInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pledge Mark Disputed
     */
    async pledgeMarkDisputedRaw(requestParameters: BackofficeApiPledgeMarkDisputedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackofficePledge>> {
        if (requestParameters.pledgeId === null || requestParameters.pledgeId === undefined) {
            throw new runtime.RequiredError('pledgeId','Required parameter requestParameters.pledgeId was null or undefined when calling pledgeMarkDisputed.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/pledges/mark_disputed/{pledge_id}`.replace(`{${"pledge_id"}}`, encodeURIComponent(String(requestParameters.pledgeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackofficePledgeFromJSON(jsonValue));
    }

    /**
     * Pledge Mark Disputed
     */
    async pledgeMarkDisputed(requestParameters: BackofficeApiPledgeMarkDisputedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackofficePledge> {
        const response = await this.pledgeMarkDisputedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pledge Reward Transfer
     */
    async pledgeRewardTransferRaw(requestParameters: BackofficeApiPledgeRewardTransferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BackofficeReward>> {
        if (requestParameters.pledgeRewardTransfer === null || requestParameters.pledgeRewardTransfer === undefined) {
            throw new runtime.RequiredError('pledgeRewardTransfer','Required parameter requestParameters.pledgeRewardTransfer was null or undefined when calling pledgeRewardTransfer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/pledges/approve`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PledgeRewardTransferToJSON(requestParameters.pledgeRewardTransfer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BackofficeRewardFromJSON(jsonValue));
    }

    /**
     * Pledge Reward Transfer
     */
    async pledgeRewardTransfer(requestParameters: BackofficeApiPledgeRewardTransferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BackofficeReward> {
        const response = await this.pledgeRewardTransferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pledges
     */
    async pledgesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BackofficePledge>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/pledges`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BackofficePledgeFromJSON));
    }

    /**
     * Pledges
     */
    async pledges(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BackofficePledge>> {
        const response = await this.pledgesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Rewards
     */
    async rewardsRaw(requestParameters: BackofficeApiRewardsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceBackofficeReward>> {
        const queryParameters: any = {};

        if (requestParameters.issueId !== undefined) {
            queryParameters['issue_id'] = requestParameters.issueId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/rewards/by_issue`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResourceBackofficeRewardFromJSON(jsonValue));
    }

    /**
     * Rewards
     */
    async rewards(requestParameters: BackofficeApiRewardsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceBackofficeReward> {
        const response = await this.rewardsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Rewards Pending
     */
    async rewardsPendingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceBackofficeReward>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/backoffice/rewards/pending`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResourceBackofficeRewardFromJSON(jsonValue));
    }

    /**
     * Rewards Pending
     */
    async rewardsPending(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceBackofficeReward> {
        const response = await this.rewardsPendingRaw(initOverrides);
        return await response.value();
    }

}