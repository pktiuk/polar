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

import { exists, mapValues } from '../runtime';
import type { Issue } from './Issue';
import {
    IssueFromJSON,
    IssueFromJSONTyped,
    IssueToJSON,
} from './Issue';
import type { Pagination } from './Pagination';
import {
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './Pagination';

/**
 * 
 * @export
 * @interface ListResourceIssue
 */
export interface ListResourceIssue {
    /**
     * 
     * @type {Array<Issue>}
     * @memberof ListResourceIssue
     */
    items?: Array<Issue>;
    /**
     * 
     * @type {Pagination}
     * @memberof ListResourceIssue
     */
    pagination: Pagination;
}

/**
 * Check if a given object implements the ListResourceIssue interface.
 */
export function instanceOfListResourceIssue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pagination" in value;

    return isInstance;
}

export function ListResourceIssueFromJSON(json: any): ListResourceIssue {
    return ListResourceIssueFromJSONTyped(json, false);
}

export function ListResourceIssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListResourceIssue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(IssueFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function ListResourceIssueToJSON(value?: ListResourceIssue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(IssueToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
