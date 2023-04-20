/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
  onCreateRental: OnCreateRentalSubscription;
  onUpdateRental: OnUpdateRentalSubscription;
  onDeleteRental: OnDeleteRentalSubscription;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type CreateRentalInput = {
  id?: string | null;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
};

export enum RentalType {
  APARTMENT = "APARTMENT",
  ROOM = "ROOM",
  HOUSE = "HOUSE",
  SHORT_TERM = "SHORT_TERM",
  SHORT_TERM_STAY = "SHORT_TERM_STAY"
}

export type ModelRentalConditionInput = {
  rentalType?: ModelRentalTypeInput | null;
  title?: ModelStringInput | null;
  photo?: ModelStringInput | null;
  pricePerMonth?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  noRooms?: ModelFloatInput | null;
  noBeds?: ModelFloatInput | null;
  noBaths?: ModelFloatInput | null;
  saleStatus?: ModelStringInput | null;
  and?: Array<ModelRentalConditionInput | null> | null;
  or?: Array<ModelRentalConditionInput | null> | null;
  not?: ModelRentalConditionInput | null;
};

export type ModelRentalTypeInput = {
  eq?: RentalType | null;
  ne?: RentalType | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Rental = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRentalInput = {
  id: string;
  rentalType?: RentalType | null;
  title?: string | null;
  photo?: string | null;
  pricePerMonth?: number | null;
  description?: string | null;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
};

export type DeleteRentalInput = {
  id: string;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelRentalFilterInput = {
  id?: ModelIDInput | null;
  rentalType?: ModelRentalTypeInput | null;
  title?: ModelStringInput | null;
  photo?: ModelStringInput | null;
  pricePerMonth?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  noRooms?: ModelFloatInput | null;
  noBeds?: ModelFloatInput | null;
  noBaths?: ModelFloatInput | null;
  saleStatus?: ModelStringInput | null;
  and?: Array<ModelRentalFilterInput | null> | null;
  or?: Array<ModelRentalFilterInput | null> | null;
  not?: ModelRentalFilterInput | null;
};

export type ModelRentalConnection = {
  __typename: "ModelRentalConnection";
  items: Array<Rental | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionRentalFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  rentalType?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  photo?: ModelSubscriptionStringInput | null;
  pricePerMonth?: ModelSubscriptionFloatInput | null;
  description?: ModelSubscriptionStringInput | null;
  noRooms?: ModelSubscriptionFloatInput | null;
  noBeds?: ModelSubscriptionFloatInput | null;
  noBaths?: ModelSubscriptionFloatInput | null;
  saleStatus?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRentalFilterInput | null> | null;
  or?: Array<ModelSubscriptionRentalFilterInput | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateRentalMutation = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRentalMutation = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRentalMutation = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRentalQuery = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRentalsQuery = {
  __typename: "ModelRentalConnection";
  items: Array<{
    __typename: "Rental";
    id: string;
    rentalType: RentalType;
    title: string;
    photo?: string | null;
    pricePerMonth: number;
    description: string;
    noRooms?: number | null;
    noBeds?: number | null;
    noBaths?: number | null;
    saleStatus?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRentalSubscription = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRentalSubscription = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRentalSubscription = {
  __typename: "Rental";
  id: string;
  rentalType: RentalType;
  title: string;
  photo?: string | null;
  pricePerMonth: number;
  description: string;
  noRooms?: number | null;
  noBeds?: number | null;
  noBaths?: number | null;
  saleStatus?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateRental(
    input: CreateRentalInput,
    condition?: ModelRentalConditionInput
  ): Promise<CreateRentalMutation> {
    const statement = `mutation CreateRental($input: CreateRentalInput!, $condition: ModelRentalConditionInput) {
        createRental(input: $input, condition: $condition) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRentalMutation>response.data.createRental;
  }
  async UpdateRental(
    input: UpdateRentalInput,
    condition?: ModelRentalConditionInput
  ): Promise<UpdateRentalMutation> {
    const statement = `mutation UpdateRental($input: UpdateRentalInput!, $condition: ModelRentalConditionInput) {
        updateRental(input: $input, condition: $condition) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRentalMutation>response.data.updateRental;
  }
  async DeleteRental(
    input: DeleteRentalInput,
    condition?: ModelRentalConditionInput
  ): Promise<DeleteRentalMutation> {
    const statement = `mutation DeleteRental($input: DeleteRentalInput!, $condition: ModelRentalConditionInput) {
        deleteRental(input: $input, condition: $condition) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRentalMutation>response.data.deleteRental;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetRental(id: string): Promise<GetRentalQuery> {
    const statement = `query GetRental($id: ID!) {
        getRental(id: $id) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRentalQuery>response.data.getRental;
  }
  async ListRentals(
    filter?: ModelRentalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRentalsQuery> {
    const statement = `query ListRentals($filter: ModelRentalFilterInput, $limit: Int, $nextToken: String) {
        listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            rentalType
            title
            photo
            pricePerMonth
            description
            noRooms
            noBeds
            noBaths
            saleStatus
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRentalsQuery>response.data.listRentals;
  }
  OnCreateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > {
    const statement = `subscription OnCreateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onCreateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
    >;
  }

  OnUpdateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > {
    const statement = `subscription OnUpdateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onUpdateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
    >;
  }

  OnDeleteRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > {
    const statement = `subscription OnDeleteRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onDeleteRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
  }

  OnCreateRentalListener(
    filter?: ModelSubscriptionRentalFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRental">>
  > {
    const statement = `subscription OnCreateRental($filter: ModelSubscriptionRentalFilterInput) {
        onCreateRental(filter: $filter) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRental">>
    >;
  }

  OnUpdateRentalListener(
    filter?: ModelSubscriptionRentalFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRental">>
  > {
    const statement = `subscription OnUpdateRental($filter: ModelSubscriptionRentalFilterInput) {
        onUpdateRental(filter: $filter) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRental">>
    >;
  }

  OnDeleteRentalListener(
    filter?: ModelSubscriptionRentalFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRental">>
  > {
    const statement = `subscription OnDeleteRental($filter: ModelSubscriptionRentalFilterInput) {
        onDeleteRental(filter: $filter) {
          __typename
          id
          rentalType
          title
          photo
          pricePerMonth
          description
          noRooms
          noBeds
          noBaths
          saleStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRental">>
    >;
  }
}
