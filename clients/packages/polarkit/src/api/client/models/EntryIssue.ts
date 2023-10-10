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
import type { Id } from './Id';
import {
    IdFromJSON,
    IdFromJSONTyped,
    IdToJSON,
} from './Id';
import type { Issue } from './Issue';
import {
    IssueFromJSON,
    IssueFromJSONTyped,
    IssueToJSON,
} from './Issue';
import type { Relationship } from './Relationship';
import {
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
} from './Relationship';

/**
 * 
 * @export
 * @interface EntryIssue
 */
export interface EntryIssue {
    /**
     * 
     * @type {string}
     * @memberof EntryIssue
     */
    type: string;
    /**
     * 
     * @type {Id}
     * @memberof EntryIssue
     */
    id: Id;
    /**
     * 
     * @type {Issue}
     * @memberof EntryIssue
     */
    attributes: Issue;
    /**
     * 
     * @type {{ [key: string]: Relationship; }}
     * @memberof EntryIssue
     */
    relationships?: { [key: string]: Relationship; };
}

/**
 * Check if a given object implements the EntryIssue interface.
 */
export function instanceOfEntryIssue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function EntryIssueFromJSON(json: any): EntryIssue {
    return EntryIssueFromJSONTyped(json, false);
}

export function EntryIssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntryIssue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': IdFromJSON(json['id']),
        'attributes': IssueFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : (mapValues(json['relationships'], RelationshipFromJSON)),
    };
}

export function EntryIssueToJSON(value?: EntryIssue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': IdToJSON(value.id),
        'attributes': IssueToJSON(value.attributes),
        'relationships': value.relationships === undefined ? undefined : (mapValues(value.relationships, RelationshipToJSON)),
    };
}
