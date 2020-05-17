import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  activity?: Maybe<Activity>;
  activities: Array<Activity>;
  experience?: Maybe<Experience>;
  experiences: Array<Experience>;
  place?: Maybe<Place>;
  places: Array<Place>;
  preference?: Maybe<Preference>;
  preferences: Array<Preference>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  skill?: Maybe<Skill>;
  skills: Array<Skill>;
  tool?: Maybe<Tool>;
  tools: Array<Tool>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryActivityArgs = {
  where: ActivityWhereUniqueInput;
};


export type QueryActivitiesArgs = {
  where?: Maybe<ActivityWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ActivityWhereUniqueInput>;
  before?: Maybe<ActivityWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type QueryExperiencesArgs = {
  where?: Maybe<ExperienceWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ExperienceWhereUniqueInput>;
  before?: Maybe<ExperienceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPlaceArgs = {
  where: PlaceWhereUniqueInput;
};


export type QueryPlacesArgs = {
  where?: Maybe<PlaceWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<PlaceWhereUniqueInput>;
  before?: Maybe<PlaceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPreferenceArgs = {
  where: PreferenceWhereUniqueInput;
};


export type QueryPreferencesArgs = {
  where?: Maybe<PreferenceWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<PreferenceWhereUniqueInput>;
  before?: Maybe<PreferenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  where?: Maybe<ProfileWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ProfileWhereUniqueInput>;
  before?: Maybe<ProfileWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};


export type QuerySkillsArgs = {
  where?: Maybe<SkillWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<SkillWhereUniqueInput>;
  before?: Maybe<SkillWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryToolArgs = {
  where: ToolWhereUniqueInput;
};


export type QueryToolsArgs = {
  where?: Maybe<ToolWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ToolWhereUniqueInput>;
  before?: Maybe<ToolWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTraitArgs = {
  where: TraitWhereUniqueInput;
};


export type QueryTraitsArgs = {
  where?: Maybe<TraitWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<TraitWhereUniqueInput>;
  before?: Maybe<TraitWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ActivityWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Activity = {
   __typename?: 'Activity';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind: ActivityKind;
  image?: Maybe<Scalars['String']>;
  profile: Profile;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export enum ActivityKind {
  Project = 'Project',
  Writing = 'Writing',
  Video = 'Video'
}

export type Profile = {
   __typename?: 'Profile';
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  preferences: Array<Preference>;
  preview?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  skills: Array<Skill>;
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type ProfilePreferencesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<PreferenceWhereUniqueInput>;
  before?: Maybe<PreferenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProfileSkillsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<SkillWhereUniqueInput>;
  before?: Maybe<SkillWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PreferenceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  profileId_traitId?: Maybe<ProfileIdTraitIdCompoundUniqueInput>;
};

export type ProfileIdTraitIdCompoundUniqueInput = {
  profileId: Scalars['String'];
  traitId: Scalars['String'];
};

export type Preference = {
   __typename?: 'Preference';
  id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  feels: Scalars['Int'];
  published: Scalars['Boolean'];
  trait: Trait;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Trait = {
   __typename?: 'Trait';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind: TraitKind;
  name: Scalars['String'];
  preferences: Array<Preference>;
  verified: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type TraitPreferencesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<PreferenceWhereUniqueInput>;
  before?: Maybe<PreferenceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum TraitKind {
  Role = 'Role',
  Team = 'Team',
  Workplace = 'Workplace',
  Company = 'Company'
}


export type SkillWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  profileId_toolId?: Maybe<ProfileIdToolIdCompoundUniqueInput>;
};

export type ProfileIdToolIdCompoundUniqueInput = {
  profileId: Scalars['String'];
  toolId: Scalars['String'];
};

export type Skill = {
   __typename?: 'Skill';
  id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  profile: Profile;
  published: Scalars['Boolean'];
  tool: Tool;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Tool = {
   __typename?: 'Tool';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind: ToolKind;
  name: Scalars['String'];
  skills: Array<Skill>;
  url?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type ToolSkillsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<SkillWhereUniqueInput>;
  before?: Maybe<SkillWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum ToolKind {
  Language = 'Language',
  Framework = 'Framework',
  Library = 'Library',
  Device = 'Device',
  Service = 'Service',
  Software = 'Software',
  Specialty = 'Specialty'
}

export type User = {
   __typename?: 'User';
  id: Scalars['String'];
  auth0Sub: Scalars['String'];
  email: Scalars['String'];
  productEmail: Scalars['Boolean'];
  promotionalEmail: Scalars['Boolean'];
  inboundConnections: Array<Connection>;
  outboundConnections: Array<Connection>;
  profile?: Maybe<Profile>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type UserInboundConnectionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ConnectionWhereUniqueInput>;
  before?: Maybe<ConnectionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserOutboundConnectionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ConnectionWhereUniqueInput>;
  before?: Maybe<ConnectionWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ConnectionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  userId_connectedId?: Maybe<UserIdConnectedIdCompoundUniqueInput>;
};

export type UserIdConnectedIdCompoundUniqueInput = {
  userId: Scalars['String'];
  connectedId: Scalars['String'];
};

export type Connection = {
   __typename?: 'Connection';
  id: Scalars['String'];
  connected: User;
  pin: Scalars['String'];
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  kind?: Maybe<ActivityKind>;
  title?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  image?: Maybe<NullableStringFilter>;
  url?: Maybe<NullableStringFilter>;
  date?: Maybe<DateTimeFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ActivityWhereInput>>;
  OR?: Maybe<Array<ActivityWhereInput>>;
  NOT?: Maybe<Array<ActivityWhereInput>>;
  profile?: Maybe<ProfileWhereInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type ProfileWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  nickname?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  photo?: Maybe<NullableStringFilter>;
  location?: Maybe<NullableStringFilter>;
  image?: Maybe<NullableStringFilter>;
  about?: Maybe<NullableStringFilter>;
  pronouns?: Maybe<NullableStringFilter>;
  preview?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  skills?: Maybe<SkillFilter>;
  externals?: Maybe<ExternalFilter>;
  preferences?: Maybe<PreferenceFilter>;
  experiences?: Maybe<ExperienceFilter>;
  activities?: Maybe<ActivityFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ProfileWhereInput>>;
  OR?: Maybe<Array<ProfileWhereInput>>;
  NOT?: Maybe<Array<ProfileWhereInput>>;
  user?: Maybe<UserWhereInput>;
};

export type SkillFilter = {
  every?: Maybe<SkillWhereInput>;
  some?: Maybe<SkillWhereInput>;
  none?: Maybe<SkillWhereInput>;
};

export type SkillWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  toolId?: Maybe<StringFilter>;
  level?: Maybe<IntFilter>;
  comment?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<SkillWhereInput>>;
  OR?: Maybe<Array<SkillWhereInput>>;
  NOT?: Maybe<Array<SkillWhereInput>>;
  profile?: Maybe<ProfileWhereInput>;
  tool?: Maybe<ToolWhereInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type ToolWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  kind?: Maybe<ToolKind>;
  description?: Maybe<NullableStringFilter>;
  url?: Maybe<NullableStringFilter>;
  verified?: Maybe<BooleanFilter>;
  skills?: Maybe<SkillFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ToolWhereInput>>;
  OR?: Maybe<Array<ToolWhereInput>>;
  NOT?: Maybe<Array<ToolWhereInput>>;
};

export type ExternalFilter = {
  every?: Maybe<ExternalWhereInput>;
  some?: Maybe<ExternalWhereInput>;
  none?: Maybe<ExternalWhereInput>;
};

export type ExternalWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  service?: Maybe<StringFilter>;
  nickname?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ExternalWhereInput>>;
  OR?: Maybe<Array<ExternalWhereInput>>;
  NOT?: Maybe<Array<ExternalWhereInput>>;
  profile?: Maybe<ProfileWhereInput>;
};

export type PreferenceFilter = {
  every?: Maybe<PreferenceWhereInput>;
  some?: Maybe<PreferenceWhereInput>;
  none?: Maybe<PreferenceWhereInput>;
};

export type PreferenceWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  traitId?: Maybe<StringFilter>;
  feels?: Maybe<IntFilter>;
  comment?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<PreferenceWhereInput>>;
  OR?: Maybe<Array<PreferenceWhereInput>>;
  NOT?: Maybe<Array<PreferenceWhereInput>>;
  profile?: Maybe<ProfileWhereInput>;
  trait?: Maybe<TraitWhereInput>;
};

export type TraitWhereInput = {
  id?: Maybe<StringFilter>;
  kind?: Maybe<TraitKind>;
  name?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  verified?: Maybe<BooleanFilter>;
  preferences?: Maybe<PreferenceFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<TraitWhereInput>>;
  OR?: Maybe<Array<TraitWhereInput>>;
  NOT?: Maybe<Array<TraitWhereInput>>;
};

export type ExperienceFilter = {
  every?: Maybe<ExperienceWhereInput>;
  some?: Maybe<ExperienceWhereInput>;
  none?: Maybe<ExperienceWhereInput>;
};

export type ExperienceWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  placeId?: Maybe<StringFilter>;
  kind?: Maybe<ExperienceKind>;
  title?: Maybe<StringFilter>;
  start?: Maybe<DateTimeFilter>;
  end?: Maybe<NullableDateTimeFilter>;
  comment?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ExperienceWhereInput>>;
  OR?: Maybe<Array<ExperienceWhereInput>>;
  NOT?: Maybe<Array<ExperienceWhereInput>>;
  profile?: Maybe<ProfileWhereInput>;
  place?: Maybe<PlaceWhereInput>;
};

export enum ExperienceKind {
  Employee = 'Employee',
  Student = 'Student',
  Attendee = 'Attendee',
  Speaker = 'Speaker',
  Instructor = 'Instructor',
  Organizer = 'Organizer'
}

export type PlaceWhereInput = {
  id?: Maybe<StringFilter>;
  kind?: Maybe<PlaceKind>;
  name?: Maybe<StringFilter>;
  url?: Maybe<NullableStringFilter>;
  description?: Maybe<NullableStringFilter>;
  experiences?: Maybe<ExperienceFilter>;
  verified?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<PlaceWhereInput>>;
  OR?: Maybe<Array<PlaceWhereInput>>;
  NOT?: Maybe<Array<PlaceWhereInput>>;
};

export enum PlaceKind {
  Company = 'Company',
  School = 'School',
  Class = 'Class',
  Bootcamp = 'Bootcamp',
  Conference = 'Conference',
  Hackathon = 'Hackathon',
  Meetup = 'Meetup'
}

export type ActivityFilter = {
  every?: Maybe<ActivityWhereInput>;
  some?: Maybe<ActivityWhereInput>;
  none?: Maybe<ActivityWhereInput>;
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  auth0Sub?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  productEmail?: Maybe<BooleanFilter>;
  promotionalEmail?: Maybe<BooleanFilter>;
  outboundConnections?: Maybe<ConnectionFilter>;
  inboundConnections?: Maybe<ConnectionFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  profile?: Maybe<ProfileWhereInput>;
};

export type ConnectionFilter = {
  every?: Maybe<ConnectionWhereInput>;
  some?: Maybe<ConnectionWhereInput>;
  none?: Maybe<ConnectionWhereInput>;
};

export type ConnectionWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  connectedId?: Maybe<StringFilter>;
  pin?: Maybe<StringFilter>;
  comment?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ConnectionWhereInput>>;
  OR?: Maybe<Array<ConnectionWhereInput>>;
  NOT?: Maybe<Array<ConnectionWhereInput>>;
  user?: Maybe<UserWhereInput>;
  connected?: Maybe<UserWhereInput>;
};

export type ExperienceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Experience = {
   __typename?: 'Experience';
  id: Scalars['String'];
  kind: ExperienceKind;
  profile: Profile;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  place: Place;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Place = {
   __typename?: 'Place';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  experiences: Array<Experience>;
  name: Scalars['String'];
  kind: PlaceKind;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type PlaceExperiencesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ExperienceWhereUniqueInput>;
  before?: Maybe<ExperienceWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PlaceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
};

export type ToolWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TraitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createOneActivity: Activity;
  updateOneActivity?: Maybe<Activity>;
  deleteOneActivity?: Maybe<Activity>;
  createOneConnection: Connection;
  updateOneConnection?: Maybe<Connection>;
  deleteOneConnection?: Maybe<Connection>;
  createOneExperience: Experience;
  updateOneExperience?: Maybe<Experience>;
  deleteOneExperience?: Maybe<Experience>;
  createOneExternal: External;
  updateOneExternal?: Maybe<External>;
  deleteOneExternal?: Maybe<External>;
  createOneOpenGraph: OpenGraph;
  updateOneOpenGraph?: Maybe<OpenGraph>;
  deleteOneOpenGraph?: Maybe<OpenGraph>;
  createOnePlace: Place;
  updateOnePlace?: Maybe<Place>;
  deleteOnePlace?: Maybe<Place>;
  createOnePreference: Preference;
  updateOnePreference?: Maybe<Preference>;
  deleteOnePreference?: Maybe<Preference>;
  createOneProfile: Profile;
  updateOneProfile?: Maybe<Profile>;
  deleteOneProfile?: Maybe<Profile>;
  createOneSkill: Skill;
  updateOneSkill?: Maybe<Skill>;
  deleteOneSkill?: Maybe<Skill>;
  createOneTool: Tool;
  updateOneTool?: Maybe<Tool>;
  deleteOneTool?: Maybe<Tool>;
  createOneTrait: Trait;
  updateOneTrait?: Maybe<Trait>;
  deleteOneTrait?: Maybe<Trait>;
  createOneUser: User;
  updateOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
};


export type MutationCreateOneActivityArgs = {
  data: ActivityCreateInput;
};


export type MutationUpdateOneActivityArgs = {
  data: ActivityUpdateInput;
  where: ActivityWhereUniqueInput;
};


export type MutationDeleteOneActivityArgs = {
  where: ActivityWhereUniqueInput;
};


export type MutationCreateOneConnectionArgs = {
  data: ConnectionCreateInput;
};


export type MutationUpdateOneConnectionArgs = {
  data: ConnectionUpdateInput;
  where: ConnectionWhereUniqueInput;
};


export type MutationDeleteOneConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type MutationCreateOneExperienceArgs = {
  data: ExperienceCreateInput;
};


export type MutationUpdateOneExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationDeleteOneExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type MutationCreateOneExternalArgs = {
  data: ExternalCreateInput;
};


export type MutationUpdateOneExternalArgs = {
  data: ExternalUpdateInput;
  where: ExternalWhereUniqueInput;
};


export type MutationDeleteOneExternalArgs = {
  where: ExternalWhereUniqueInput;
};


export type MutationCreateOneOpenGraphArgs = {
  data: OpenGraphCreateInput;
};


export type MutationUpdateOneOpenGraphArgs = {
  data: OpenGraphUpdateInput;
  where: OpenGraphWhereUniqueInput;
};


export type MutationDeleteOneOpenGraphArgs = {
  where: OpenGraphWhereUniqueInput;
};


export type MutationCreateOnePlaceArgs = {
  data: PlaceCreateInput;
};


export type MutationUpdateOnePlaceArgs = {
  data: PlaceUpdateInput;
  where: PlaceWhereUniqueInput;
};


export type MutationDeleteOnePlaceArgs = {
  where: PlaceWhereUniqueInput;
};


export type MutationCreateOnePreferenceArgs = {
  data: PreferenceCreateInput;
};


export type MutationUpdateOnePreferenceArgs = {
  data: PreferenceUpdateInput;
  where: PreferenceWhereUniqueInput;
};


export type MutationDeleteOnePreferenceArgs = {
  where: PreferenceWhereUniqueInput;
};


export type MutationCreateOneProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationUpdateOneProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteOneProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationCreateOneSkillArgs = {
  data: SkillCreateInput;
};


export type MutationUpdateOneSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationDeleteOneSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationCreateOneToolArgs = {
  data: ToolCreateInput;
};


export type MutationUpdateOneToolArgs = {
  data: ToolUpdateInput;
  where: ToolWhereUniqueInput;
};


export type MutationDeleteOneToolArgs = {
  where: ToolWhereUniqueInput;
};


export type MutationCreateOneTraitArgs = {
  data: TraitCreateInput;
};


export type MutationUpdateOneTraitArgs = {
  data: TraitUpdateInput;
  where: TraitWhereUniqueInput;
};


export type MutationDeleteOneTraitArgs = {
  where: TraitWhereUniqueInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type ActivityCreateInput = {
  id?: Maybe<Scalars['String']>;
  kind: ActivityKind;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutActivitiesInput;
};

export type ProfileCreateOneWithoutActivitiesInput = {
  create?: Maybe<ProfileCreateWithoutActivitiesInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutActivitiesInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutProfileInput;
  skills?: Maybe<SkillCreateManyWithoutProfileInput>;
  externals?: Maybe<ExternalCreateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceCreateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceCreateManyWithoutProfileInput>;
};

export type UserCreateOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub: Scalars['String'];
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  outboundConnections?: Maybe<ConnectionCreateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionCreateManyWithoutConnectedInput>;
};

export type ConnectionCreateManyWithoutUserInput = {
  create?: Maybe<Array<ConnectionCreateWithoutUserInput>>;
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
};

export type ConnectionCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  pin: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  connected: UserCreateOneWithoutInboundConnectionsInput;
};

export type UserCreateOneWithoutInboundConnectionsInput = {
  create?: Maybe<UserCreateWithoutInboundConnectionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutInboundConnectionsInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub: Scalars['String'];
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionCreateManyWithoutUserInput>;
};

export type ProfileCreateOneWithoutUserInput = {
  create?: Maybe<ProfileCreateWithoutUserInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillCreateManyWithoutProfileInput>;
  externals?: Maybe<ExternalCreateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceCreateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceCreateManyWithoutProfileInput>;
  activities?: Maybe<ActivityCreateManyWithoutProfileInput>;
};

export type SkillCreateManyWithoutProfileInput = {
  create?: Maybe<Array<SkillCreateWithoutProfileInput>>;
  connect?: Maybe<Array<SkillWhereUniqueInput>>;
};

export type SkillCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  tool: ToolCreateOneWithoutSkillsInput;
};

export type ToolCreateOneWithoutSkillsInput = {
  create?: Maybe<ToolCreateWithoutSkillsInput>;
  connect?: Maybe<ToolWhereUniqueInput>;
};

export type ToolCreateWithoutSkillsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  kind: ToolKind;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExternalCreateManyWithoutProfileInput = {
  create?: Maybe<Array<ExternalCreateWithoutProfileInput>>;
  connect?: Maybe<Array<ExternalWhereUniqueInput>>;
};

export type ExternalCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  service: Scalars['String'];
  nickname: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExternalWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PreferenceCreateManyWithoutProfileInput = {
  create?: Maybe<Array<PreferenceCreateWithoutProfileInput>>;
  connect?: Maybe<Array<PreferenceWhereUniqueInput>>;
};

export type PreferenceCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  feels: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  trait: TraitCreateOneWithoutPreferencesInput;
};

export type TraitCreateOneWithoutPreferencesInput = {
  create?: Maybe<TraitCreateWithoutPreferencesInput>;
  connect?: Maybe<TraitWhereUniqueInput>;
};

export type TraitCreateWithoutPreferencesInput = {
  id?: Maybe<Scalars['String']>;
  kind: TraitKind;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExperienceCreateManyWithoutProfileInput = {
  create?: Maybe<Array<ExperienceCreateWithoutProfileInput>>;
  connect?: Maybe<Array<ExperienceWhereUniqueInput>>;
};

export type ExperienceCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  kind: ExperienceKind;
  title: Scalars['String'];
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  place: PlaceCreateOneWithoutExperiencesInput;
};

export type PlaceCreateOneWithoutExperiencesInput = {
  create?: Maybe<PlaceCreateWithoutExperiencesInput>;
  connect?: Maybe<PlaceWhereUniqueInput>;
};

export type PlaceCreateWithoutExperiencesInput = {
  id?: Maybe<Scalars['String']>;
  kind: PlaceKind;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityCreateManyWithoutProfileInput = {
  create?: Maybe<Array<ActivityCreateWithoutProfileInput>>;
  connect?: Maybe<Array<ActivityWhereUniqueInput>>;
};

export type ActivityCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  kind: ActivityKind;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ConnectionCreateManyWithoutConnectedInput = {
  create?: Maybe<Array<ConnectionCreateWithoutConnectedInput>>;
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
};

export type ConnectionCreateWithoutConnectedInput = {
  id?: Maybe<Scalars['String']>;
  pin: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutOutboundConnectionsInput;
};

export type UserCreateOneWithoutOutboundConnectionsInput = {
  create?: Maybe<UserCreateWithoutOutboundConnectionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutOutboundConnectionsInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub: Scalars['String'];
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionCreateManyWithoutConnectedInput>;
};

export type ActivityUpdateInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ActivityKind>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutActivitiesInput>;
};

export type ProfileUpdateOneRequiredWithoutActivitiesInput = {
  create?: Maybe<ProfileCreateWithoutActivitiesInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  update?: Maybe<ProfileUpdateWithoutActivitiesDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutActivitiesInput>;
};

export type ProfileUpdateWithoutActivitiesDataInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  skills?: Maybe<SkillUpdateManyWithoutProfileInput>;
  externals?: Maybe<ExternalUpdateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceUpdateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceUpdateManyWithoutProfileInput>;
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutProfileDataInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  outboundConnections?: Maybe<ConnectionUpdateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionUpdateManyWithoutConnectedInput>;
};

export type ConnectionUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ConnectionCreateWithoutUserInput>>;
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  set?: Maybe<Array<ConnectionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  delete?: Maybe<Array<ConnectionWhereUniqueInput>>;
  update?: Maybe<Array<ConnectionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ConnectionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ConnectionScalarWhereInput>>;
  upsert?: Maybe<Array<ConnectionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ConnectionUpdateWithWhereUniqueWithoutUserInput = {
  where: ConnectionWhereUniqueInput;
  data: ConnectionUpdateWithoutUserDataInput;
};

export type ConnectionUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  connected?: Maybe<UserUpdateOneRequiredWithoutInboundConnectionsInput>;
};

export type UserUpdateOneRequiredWithoutInboundConnectionsInput = {
  create?: Maybe<UserCreateWithoutInboundConnectionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutInboundConnectionsDataInput>;
  upsert?: Maybe<UserUpsertWithoutInboundConnectionsInput>;
};

export type UserUpdateWithoutInboundConnectionsDataInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionUpdateManyWithoutUserInput>;
};

export type ProfileUpdateOneWithoutUserInput = {
  create?: Maybe<ProfileCreateWithoutUserInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProfileUpdateWithoutUserDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillUpdateManyWithoutProfileInput>;
  externals?: Maybe<ExternalUpdateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceUpdateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceUpdateManyWithoutProfileInput>;
  activities?: Maybe<ActivityUpdateManyWithoutProfileInput>;
};

export type SkillUpdateManyWithoutProfileInput = {
  create?: Maybe<Array<SkillCreateWithoutProfileInput>>;
  connect?: Maybe<Array<SkillWhereUniqueInput>>;
  set?: Maybe<Array<SkillWhereUniqueInput>>;
  disconnect?: Maybe<Array<SkillWhereUniqueInput>>;
  delete?: Maybe<Array<SkillWhereUniqueInput>>;
  update?: Maybe<Array<SkillUpdateWithWhereUniqueWithoutProfileInput>>;
  updateMany?: Maybe<Array<SkillUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SkillScalarWhereInput>>;
  upsert?: Maybe<Array<SkillUpsertWithWhereUniqueWithoutProfileInput>>;
};

export type SkillUpdateWithWhereUniqueWithoutProfileInput = {
  where: SkillWhereUniqueInput;
  data: SkillUpdateWithoutProfileDataInput;
};

export type SkillUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  tool?: Maybe<ToolUpdateOneRequiredWithoutSkillsInput>;
};

export type ToolUpdateOneRequiredWithoutSkillsInput = {
  create?: Maybe<ToolCreateWithoutSkillsInput>;
  connect?: Maybe<ToolWhereUniqueInput>;
  update?: Maybe<ToolUpdateWithoutSkillsDataInput>;
  upsert?: Maybe<ToolUpsertWithoutSkillsInput>;
};

export type ToolUpdateWithoutSkillsDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  kind?: Maybe<ToolKind>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ToolUpsertWithoutSkillsInput = {
  update: ToolUpdateWithoutSkillsDataInput;
  create: ToolCreateWithoutSkillsInput;
};

export type SkillUpdateManyWithWhereNestedInput = {
  where: SkillScalarWhereInput;
  data: SkillUpdateManyDataInput;
};

export type SkillScalarWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  toolId?: Maybe<StringFilter>;
  level?: Maybe<IntFilter>;
  comment?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<SkillScalarWhereInput>>;
  OR?: Maybe<Array<SkillScalarWhereInput>>;
  NOT?: Maybe<Array<SkillScalarWhereInput>>;
};

export type SkillUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type SkillUpsertWithWhereUniqueWithoutProfileInput = {
  where: SkillWhereUniqueInput;
  update: SkillUpdateWithoutProfileDataInput;
  create: SkillCreateWithoutProfileInput;
};

export type ExternalUpdateManyWithoutProfileInput = {
  create?: Maybe<Array<ExternalCreateWithoutProfileInput>>;
  connect?: Maybe<Array<ExternalWhereUniqueInput>>;
  set?: Maybe<Array<ExternalWhereUniqueInput>>;
  disconnect?: Maybe<Array<ExternalWhereUniqueInput>>;
  delete?: Maybe<Array<ExternalWhereUniqueInput>>;
  update?: Maybe<Array<ExternalUpdateWithWhereUniqueWithoutProfileInput>>;
  updateMany?: Maybe<Array<ExternalUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ExternalScalarWhereInput>>;
  upsert?: Maybe<Array<ExternalUpsertWithWhereUniqueWithoutProfileInput>>;
};

export type ExternalUpdateWithWhereUniqueWithoutProfileInput = {
  where: ExternalWhereUniqueInput;
  data: ExternalUpdateWithoutProfileDataInput;
};

export type ExternalUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExternalUpdateManyWithWhereNestedInput = {
  where: ExternalScalarWhereInput;
  data: ExternalUpdateManyDataInput;
};

export type ExternalScalarWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  service?: Maybe<StringFilter>;
  nickname?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ExternalScalarWhereInput>>;
  OR?: Maybe<Array<ExternalScalarWhereInput>>;
  NOT?: Maybe<Array<ExternalScalarWhereInput>>;
};

export type ExternalUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExternalUpsertWithWhereUniqueWithoutProfileInput = {
  where: ExternalWhereUniqueInput;
  update: ExternalUpdateWithoutProfileDataInput;
  create: ExternalCreateWithoutProfileInput;
};

export type PreferenceUpdateManyWithoutProfileInput = {
  create?: Maybe<Array<PreferenceCreateWithoutProfileInput>>;
  connect?: Maybe<Array<PreferenceWhereUniqueInput>>;
  set?: Maybe<Array<PreferenceWhereUniqueInput>>;
  disconnect?: Maybe<Array<PreferenceWhereUniqueInput>>;
  delete?: Maybe<Array<PreferenceWhereUniqueInput>>;
  update?: Maybe<Array<PreferenceUpdateWithWhereUniqueWithoutProfileInput>>;
  updateMany?: Maybe<Array<PreferenceUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PreferenceScalarWhereInput>>;
  upsert?: Maybe<Array<PreferenceUpsertWithWhereUniqueWithoutProfileInput>>;
};

export type PreferenceUpdateWithWhereUniqueWithoutProfileInput = {
  where: PreferenceWhereUniqueInput;
  data: PreferenceUpdateWithoutProfileDataInput;
};

export type PreferenceUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  feels?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  trait?: Maybe<TraitUpdateOneRequiredWithoutPreferencesInput>;
};

export type TraitUpdateOneRequiredWithoutPreferencesInput = {
  create?: Maybe<TraitCreateWithoutPreferencesInput>;
  connect?: Maybe<TraitWhereUniqueInput>;
  update?: Maybe<TraitUpdateWithoutPreferencesDataInput>;
  upsert?: Maybe<TraitUpsertWithoutPreferencesInput>;
};

export type TraitUpdateWithoutPreferencesDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<TraitKind>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type TraitUpsertWithoutPreferencesInput = {
  update: TraitUpdateWithoutPreferencesDataInput;
  create: TraitCreateWithoutPreferencesInput;
};

export type PreferenceUpdateManyWithWhereNestedInput = {
  where: PreferenceScalarWhereInput;
  data: PreferenceUpdateManyDataInput;
};

export type PreferenceScalarWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  traitId?: Maybe<StringFilter>;
  feels?: Maybe<IntFilter>;
  comment?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<PreferenceScalarWhereInput>>;
  OR?: Maybe<Array<PreferenceScalarWhereInput>>;
  NOT?: Maybe<Array<PreferenceScalarWhereInput>>;
};

export type PreferenceUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  feels?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type PreferenceUpsertWithWhereUniqueWithoutProfileInput = {
  where: PreferenceWhereUniqueInput;
  update: PreferenceUpdateWithoutProfileDataInput;
  create: PreferenceCreateWithoutProfileInput;
};

export type ExperienceUpdateManyWithoutProfileInput = {
  create?: Maybe<Array<ExperienceCreateWithoutProfileInput>>;
  connect?: Maybe<Array<ExperienceWhereUniqueInput>>;
  set?: Maybe<Array<ExperienceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ExperienceWhereUniqueInput>>;
  delete?: Maybe<Array<ExperienceWhereUniqueInput>>;
  update?: Maybe<Array<ExperienceUpdateWithWhereUniqueWithoutProfileInput>>;
  updateMany?: Maybe<Array<ExperienceUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ExperienceScalarWhereInput>>;
  upsert?: Maybe<Array<ExperienceUpsertWithWhereUniqueWithoutProfileInput>>;
};

export type ExperienceUpdateWithWhereUniqueWithoutProfileInput = {
  where: ExperienceWhereUniqueInput;
  data: ExperienceUpdateWithoutProfileDataInput;
};

export type ExperienceUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ExperienceKind>;
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  place?: Maybe<PlaceUpdateOneRequiredWithoutExperiencesInput>;
};

export type PlaceUpdateOneRequiredWithoutExperiencesInput = {
  create?: Maybe<PlaceCreateWithoutExperiencesInput>;
  connect?: Maybe<PlaceWhereUniqueInput>;
  update?: Maybe<PlaceUpdateWithoutExperiencesDataInput>;
  upsert?: Maybe<PlaceUpsertWithoutExperiencesInput>;
};

export type PlaceUpdateWithoutExperiencesDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<PlaceKind>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type PlaceUpsertWithoutExperiencesInput = {
  update: PlaceUpdateWithoutExperiencesDataInput;
  create: PlaceCreateWithoutExperiencesInput;
};

export type ExperienceUpdateManyWithWhereNestedInput = {
  where: ExperienceScalarWhereInput;
  data: ExperienceUpdateManyDataInput;
};

export type ExperienceScalarWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  placeId?: Maybe<StringFilter>;
  kind?: Maybe<ExperienceKind>;
  title?: Maybe<StringFilter>;
  start?: Maybe<DateTimeFilter>;
  end?: Maybe<NullableDateTimeFilter>;
  comment?: Maybe<NullableStringFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ExperienceScalarWhereInput>>;
  OR?: Maybe<Array<ExperienceScalarWhereInput>>;
  NOT?: Maybe<Array<ExperienceScalarWhereInput>>;
};

export type ExperienceUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ExperienceKind>;
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExperienceUpsertWithWhereUniqueWithoutProfileInput = {
  where: ExperienceWhereUniqueInput;
  update: ExperienceUpdateWithoutProfileDataInput;
  create: ExperienceCreateWithoutProfileInput;
};

export type ActivityUpdateManyWithoutProfileInput = {
  create?: Maybe<Array<ActivityCreateWithoutProfileInput>>;
  connect?: Maybe<Array<ActivityWhereUniqueInput>>;
  set?: Maybe<Array<ActivityWhereUniqueInput>>;
  disconnect?: Maybe<Array<ActivityWhereUniqueInput>>;
  delete?: Maybe<Array<ActivityWhereUniqueInput>>;
  update?: Maybe<Array<ActivityUpdateWithWhereUniqueWithoutProfileInput>>;
  updateMany?: Maybe<Array<ActivityUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ActivityScalarWhereInput>>;
  upsert?: Maybe<Array<ActivityUpsertWithWhereUniqueWithoutProfileInput>>;
};

export type ActivityUpdateWithWhereUniqueWithoutProfileInput = {
  where: ActivityWhereUniqueInput;
  data: ActivityUpdateWithoutProfileDataInput;
};

export type ActivityUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ActivityKind>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityUpdateManyWithWhereNestedInput = {
  where: ActivityScalarWhereInput;
  data: ActivityUpdateManyDataInput;
};

export type ActivityScalarWhereInput = {
  id?: Maybe<StringFilter>;
  profileId?: Maybe<StringFilter>;
  kind?: Maybe<ActivityKind>;
  title?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  image?: Maybe<NullableStringFilter>;
  url?: Maybe<NullableStringFilter>;
  date?: Maybe<DateTimeFilter>;
  published?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ActivityScalarWhereInput>>;
  OR?: Maybe<Array<ActivityScalarWhereInput>>;
  NOT?: Maybe<Array<ActivityScalarWhereInput>>;
};

export type ActivityUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ActivityKind>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityUpsertWithWhereUniqueWithoutProfileInput = {
  where: ActivityWhereUniqueInput;
  update: ActivityUpdateWithoutProfileDataInput;
  create: ActivityCreateWithoutProfileInput;
};

export type ProfileUpsertWithoutUserInput = {
  update: ProfileUpdateWithoutUserDataInput;
  create: ProfileCreateWithoutUserInput;
};

export type UserUpsertWithoutInboundConnectionsInput = {
  update: UserUpdateWithoutInboundConnectionsDataInput;
  create: UserCreateWithoutInboundConnectionsInput;
};

export type ConnectionUpdateManyWithWhereNestedInput = {
  where: ConnectionScalarWhereInput;
  data: ConnectionUpdateManyDataInput;
};

export type ConnectionScalarWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  connectedId?: Maybe<StringFilter>;
  pin?: Maybe<StringFilter>;
  comment?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<ConnectionScalarWhereInput>>;
  OR?: Maybe<Array<ConnectionScalarWhereInput>>;
  NOT?: Maybe<Array<ConnectionScalarWhereInput>>;
};

export type ConnectionUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ConnectionUpsertWithWhereUniqueWithoutUserInput = {
  where: ConnectionWhereUniqueInput;
  update: ConnectionUpdateWithoutUserDataInput;
  create: ConnectionCreateWithoutUserInput;
};

export type ConnectionUpdateManyWithoutConnectedInput = {
  create?: Maybe<Array<ConnectionCreateWithoutConnectedInput>>;
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  set?: Maybe<Array<ConnectionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  delete?: Maybe<Array<ConnectionWhereUniqueInput>>;
  update?: Maybe<Array<ConnectionUpdateWithWhereUniqueWithoutConnectedInput>>;
  updateMany?: Maybe<Array<ConnectionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ConnectionScalarWhereInput>>;
  upsert?: Maybe<Array<ConnectionUpsertWithWhereUniqueWithoutConnectedInput>>;
};

export type ConnectionUpdateWithWhereUniqueWithoutConnectedInput = {
  where: ConnectionWhereUniqueInput;
  data: ConnectionUpdateWithoutConnectedDataInput;
};

export type ConnectionUpdateWithoutConnectedDataInput = {
  id?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutOutboundConnectionsInput>;
};

export type UserUpdateOneRequiredWithoutOutboundConnectionsInput = {
  create?: Maybe<UserCreateWithoutOutboundConnectionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutOutboundConnectionsDataInput>;
  upsert?: Maybe<UserUpsertWithoutOutboundConnectionsInput>;
};

export type UserUpdateWithoutOutboundConnectionsDataInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionUpdateManyWithoutConnectedInput>;
};

export type UserUpsertWithoutOutboundConnectionsInput = {
  update: UserUpdateWithoutOutboundConnectionsDataInput;
  create: UserCreateWithoutOutboundConnectionsInput;
};

export type ConnectionUpsertWithWhereUniqueWithoutConnectedInput = {
  where: ConnectionWhereUniqueInput;
  update: ConnectionUpdateWithoutConnectedDataInput;
  create: ConnectionCreateWithoutConnectedInput;
};

export type UserUpsertWithoutProfileInput = {
  update: UserUpdateWithoutProfileDataInput;
  create: UserCreateWithoutProfileInput;
};

export type ProfileUpsertWithoutActivitiesInput = {
  update: ProfileUpdateWithoutActivitiesDataInput;
  create: ProfileCreateWithoutActivitiesInput;
};

export type ConnectionCreateInput = {
  id?: Maybe<Scalars['String']>;
  pin: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutOutboundConnectionsInput;
  connected: UserCreateOneWithoutInboundConnectionsInput;
};

export type ConnectionUpdateInput = {
  id?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutOutboundConnectionsInput>;
  connected?: Maybe<UserUpdateOneRequiredWithoutInboundConnectionsInput>;
};

export type ExperienceCreateInput = {
  id?: Maybe<Scalars['String']>;
  kind: ExperienceKind;
  title: Scalars['String'];
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutExperiencesInput;
  place: PlaceCreateOneWithoutExperiencesInput;
};

export type ProfileCreateOneWithoutExperiencesInput = {
  create?: Maybe<ProfileCreateWithoutExperiencesInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutExperiencesInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutProfileInput;
  skills?: Maybe<SkillCreateManyWithoutProfileInput>;
  externals?: Maybe<ExternalCreateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceCreateManyWithoutProfileInput>;
  activities?: Maybe<ActivityCreateManyWithoutProfileInput>;
};

export type ExperienceUpdateInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ExperienceKind>;
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutExperiencesInput>;
  place?: Maybe<PlaceUpdateOneRequiredWithoutExperiencesInput>;
};

export type ProfileUpdateOneRequiredWithoutExperiencesInput = {
  create?: Maybe<ProfileCreateWithoutExperiencesInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  update?: Maybe<ProfileUpdateWithoutExperiencesDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutExperiencesInput>;
};

export type ProfileUpdateWithoutExperiencesDataInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  skills?: Maybe<SkillUpdateManyWithoutProfileInput>;
  externals?: Maybe<ExternalUpdateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceUpdateManyWithoutProfileInput>;
  activities?: Maybe<ActivityUpdateManyWithoutProfileInput>;
};

export type ProfileUpsertWithoutExperiencesInput = {
  update: ProfileUpdateWithoutExperiencesDataInput;
  create: ProfileCreateWithoutExperiencesInput;
};

export type ExternalCreateInput = {
  id?: Maybe<Scalars['String']>;
  service: Scalars['String'];
  nickname: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutExternalsInput;
};

export type ProfileCreateOneWithoutExternalsInput = {
  create?: Maybe<ProfileCreateWithoutExternalsInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutExternalsInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutProfileInput;
  skills?: Maybe<SkillCreateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceCreateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceCreateManyWithoutProfileInput>;
  activities?: Maybe<ActivityCreateManyWithoutProfileInput>;
};

export type External = {
   __typename?: 'External';
  id: Scalars['String'];
  profile: Profile;
  nickname: Scalars['String'];
  service: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ExternalUpdateInput = {
  id?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutExternalsInput>;
};

export type ProfileUpdateOneRequiredWithoutExternalsInput = {
  create?: Maybe<ProfileCreateWithoutExternalsInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  update?: Maybe<ProfileUpdateWithoutExternalsDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutExternalsInput>;
};

export type ProfileUpdateWithoutExternalsDataInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  skills?: Maybe<SkillUpdateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceUpdateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceUpdateManyWithoutProfileInput>;
  activities?: Maybe<ActivityUpdateManyWithoutProfileInput>;
};

export type ProfileUpsertWithoutExternalsInput = {
  update: ProfileUpdateWithoutExternalsDataInput;
  create: ProfileCreateWithoutExternalsInput;
};

export type OpenGraphCreateInput = {
  id?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  urlhash: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type OpenGraph = {
   __typename?: 'OpenGraph';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
  urlhash: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type OpenGraphUpdateInput = {
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type OpenGraphWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlhash?: Maybe<Scalars['String']>;
};

export type PlaceCreateInput = {
  id?: Maybe<Scalars['String']>;
  kind: PlaceKind;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  experiences?: Maybe<ExperienceCreateManyWithoutPlaceInput>;
};

export type ExperienceCreateManyWithoutPlaceInput = {
  create?: Maybe<Array<ExperienceCreateWithoutPlaceInput>>;
  connect?: Maybe<Array<ExperienceWhereUniqueInput>>;
};

export type ExperienceCreateWithoutPlaceInput = {
  id?: Maybe<Scalars['String']>;
  kind: ExperienceKind;
  title: Scalars['String'];
  start: Scalars['DateTime'];
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutExperiencesInput;
};

export type PlaceUpdateInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<PlaceKind>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  experiences?: Maybe<ExperienceUpdateManyWithoutPlaceInput>;
};

export type ExperienceUpdateManyWithoutPlaceInput = {
  create?: Maybe<Array<ExperienceCreateWithoutPlaceInput>>;
  connect?: Maybe<Array<ExperienceWhereUniqueInput>>;
  set?: Maybe<Array<ExperienceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ExperienceWhereUniqueInput>>;
  delete?: Maybe<Array<ExperienceWhereUniqueInput>>;
  update?: Maybe<Array<ExperienceUpdateWithWhereUniqueWithoutPlaceInput>>;
  updateMany?: Maybe<Array<ExperienceUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ExperienceScalarWhereInput>>;
  upsert?: Maybe<Array<ExperienceUpsertWithWhereUniqueWithoutPlaceInput>>;
};

export type ExperienceUpdateWithWhereUniqueWithoutPlaceInput = {
  where: ExperienceWhereUniqueInput;
  data: ExperienceUpdateWithoutPlaceDataInput;
};

export type ExperienceUpdateWithoutPlaceDataInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<ExperienceKind>;
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutExperiencesInput>;
};

export type ExperienceUpsertWithWhereUniqueWithoutPlaceInput = {
  where: ExperienceWhereUniqueInput;
  update: ExperienceUpdateWithoutPlaceDataInput;
  create: ExperienceCreateWithoutPlaceInput;
};

export type PreferenceCreateInput = {
  id?: Maybe<Scalars['String']>;
  feels: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutPreferencesInput;
  trait: TraitCreateOneWithoutPreferencesInput;
};

export type ProfileCreateOneWithoutPreferencesInput = {
  create?: Maybe<ProfileCreateWithoutPreferencesInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutPreferencesInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutProfileInput;
  skills?: Maybe<SkillCreateManyWithoutProfileInput>;
  externals?: Maybe<ExternalCreateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceCreateManyWithoutProfileInput>;
  activities?: Maybe<ActivityCreateManyWithoutProfileInput>;
};

export type PreferenceUpdateInput = {
  id?: Maybe<Scalars['String']>;
  feels?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutPreferencesInput>;
  trait?: Maybe<TraitUpdateOneRequiredWithoutPreferencesInput>;
};

export type ProfileUpdateOneRequiredWithoutPreferencesInput = {
  create?: Maybe<ProfileCreateWithoutPreferencesInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  update?: Maybe<ProfileUpdateWithoutPreferencesDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutPreferencesInput>;
};

export type ProfileUpdateWithoutPreferencesDataInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  skills?: Maybe<SkillUpdateManyWithoutProfileInput>;
  externals?: Maybe<ExternalUpdateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceUpdateManyWithoutProfileInput>;
  activities?: Maybe<ActivityUpdateManyWithoutProfileInput>;
};

export type ProfileUpsertWithoutPreferencesInput = {
  update: ProfileUpdateWithoutPreferencesDataInput;
  create: ProfileCreateWithoutPreferencesInput;
};

export type ProfileCreateInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutProfileInput;
  skills?: Maybe<SkillCreateManyWithoutProfileInput>;
  externals?: Maybe<ExternalCreateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceCreateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceCreateManyWithoutProfileInput>;
  activities?: Maybe<ActivityCreateManyWithoutProfileInput>;
};

export type ProfileUpdateInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  skills?: Maybe<SkillUpdateManyWithoutProfileInput>;
  externals?: Maybe<ExternalUpdateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceUpdateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceUpdateManyWithoutProfileInput>;
  activities?: Maybe<ActivityUpdateManyWithoutProfileInput>;
};

export type SkillCreateInput = {
  id?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutSkillsInput;
  tool: ToolCreateOneWithoutSkillsInput;
};

export type ProfileCreateOneWithoutSkillsInput = {
  create?: Maybe<ProfileCreateWithoutSkillsInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutSkillsInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutProfileInput;
  externals?: Maybe<ExternalCreateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceCreateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceCreateManyWithoutProfileInput>;
  activities?: Maybe<ActivityCreateManyWithoutProfileInput>;
};

export type SkillUpdateInput = {
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutSkillsInput>;
  tool?: Maybe<ToolUpdateOneRequiredWithoutSkillsInput>;
};

export type ProfileUpdateOneRequiredWithoutSkillsInput = {
  create?: Maybe<ProfileCreateWithoutSkillsInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  update?: Maybe<ProfileUpdateWithoutSkillsDataInput>;
  upsert?: Maybe<ProfileUpsertWithoutSkillsInput>;
};

export type ProfileUpdateWithoutSkillsDataInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  pronouns?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  externals?: Maybe<ExternalUpdateManyWithoutProfileInput>;
  preferences?: Maybe<PreferenceUpdateManyWithoutProfileInput>;
  experiences?: Maybe<ExperienceUpdateManyWithoutProfileInput>;
  activities?: Maybe<ActivityUpdateManyWithoutProfileInput>;
};

export type ProfileUpsertWithoutSkillsInput = {
  update: ProfileUpdateWithoutSkillsDataInput;
  create: ProfileCreateWithoutSkillsInput;
};

export type ToolCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  kind: ToolKind;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillCreateManyWithoutToolInput>;
};

export type SkillCreateManyWithoutToolInput = {
  create?: Maybe<Array<SkillCreateWithoutToolInput>>;
  connect?: Maybe<Array<SkillWhereUniqueInput>>;
};

export type SkillCreateWithoutToolInput = {
  id?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutSkillsInput;
};

export type ToolUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  kind?: Maybe<ToolKind>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  skills?: Maybe<SkillUpdateManyWithoutToolInput>;
};

export type SkillUpdateManyWithoutToolInput = {
  create?: Maybe<Array<SkillCreateWithoutToolInput>>;
  connect?: Maybe<Array<SkillWhereUniqueInput>>;
  set?: Maybe<Array<SkillWhereUniqueInput>>;
  disconnect?: Maybe<Array<SkillWhereUniqueInput>>;
  delete?: Maybe<Array<SkillWhereUniqueInput>>;
  update?: Maybe<Array<SkillUpdateWithWhereUniqueWithoutToolInput>>;
  updateMany?: Maybe<Array<SkillUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SkillScalarWhereInput>>;
  upsert?: Maybe<Array<SkillUpsertWithWhereUniqueWithoutToolInput>>;
};

export type SkillUpdateWithWhereUniqueWithoutToolInput = {
  where: SkillWhereUniqueInput;
  data: SkillUpdateWithoutToolDataInput;
};

export type SkillUpdateWithoutToolDataInput = {
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutSkillsInput>;
};

export type SkillUpsertWithWhereUniqueWithoutToolInput = {
  where: SkillWhereUniqueInput;
  update: SkillUpdateWithoutToolDataInput;
  create: SkillCreateWithoutToolInput;
};

export type TraitCreateInput = {
  id?: Maybe<Scalars['String']>;
  kind: TraitKind;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  preferences?: Maybe<PreferenceCreateManyWithoutTraitInput>;
};

export type PreferenceCreateManyWithoutTraitInput = {
  create?: Maybe<Array<PreferenceCreateWithoutTraitInput>>;
  connect?: Maybe<Array<PreferenceWhereUniqueInput>>;
};

export type PreferenceCreateWithoutTraitInput = {
  id?: Maybe<Scalars['String']>;
  feels: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutPreferencesInput;
};

export type TraitUpdateInput = {
  id?: Maybe<Scalars['String']>;
  kind?: Maybe<TraitKind>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  preferences?: Maybe<PreferenceUpdateManyWithoutTraitInput>;
};

export type PreferenceUpdateManyWithoutTraitInput = {
  create?: Maybe<Array<PreferenceCreateWithoutTraitInput>>;
  connect?: Maybe<Array<PreferenceWhereUniqueInput>>;
  set?: Maybe<Array<PreferenceWhereUniqueInput>>;
  disconnect?: Maybe<Array<PreferenceWhereUniqueInput>>;
  delete?: Maybe<Array<PreferenceWhereUniqueInput>>;
  update?: Maybe<Array<PreferenceUpdateWithWhereUniqueWithoutTraitInput>>;
  updateMany?: Maybe<Array<PreferenceUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PreferenceScalarWhereInput>>;
  upsert?: Maybe<Array<PreferenceUpsertWithWhereUniqueWithoutTraitInput>>;
};

export type PreferenceUpdateWithWhereUniqueWithoutTraitInput = {
  where: PreferenceWhereUniqueInput;
  data: PreferenceUpdateWithoutTraitDataInput;
};

export type PreferenceUpdateWithoutTraitDataInput = {
  id?: Maybe<Scalars['String']>;
  feels?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneRequiredWithoutPreferencesInput>;
};

export type PreferenceUpsertWithWhereUniqueWithoutTraitInput = {
  where: PreferenceWhereUniqueInput;
  update: PreferenceUpdateWithoutTraitDataInput;
  create: PreferenceCreateWithoutTraitInput;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub: Scalars['String'];
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionCreateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionCreateManyWithoutConnectedInput>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionUpdateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionUpdateManyWithoutConnectedInput>;
};

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'auth0Sub'>
);

export type UserQueryVariables = {
  where: UserWhereUniqueInput;
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type SignupMutationVariables = {
  userInput: UserCreateInput;
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { createOneUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type UserListQueryVariables = {};


export type UserListQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserInfoFragment
  )> }
);

export type UpdateUserMutationVariables = {
  userInput: UserUpdateInput;
  id: Scalars['String'];
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  email
  auth0Sub
}
    `;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
  }
}
    `;
export type UserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserQuery, UserQueryVariables>
    } & TChildProps;
export function withUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps, TDataName>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($userInput: UserCreateInput!) {
  createOneUser(data: $userInput) {
    id
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;
export type SignupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>
    } & TChildProps;
export function withSignup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignupMutation,
  SignupMutationVariables,
  SignupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignupMutation, SignupMutationVariables, SignupProps<TChildProps, TDataName>>(SignupDocument, {
      alias: 'signup',
      ...operationOptions
    });
};

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UserListDocument = gql`
    query UserList {
  users {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export type UserListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserListQuery, UserListQueryVariables>
    } & TChildProps;
export function withUserList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserListQuery,
  UserListQueryVariables,
  UserListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserListQuery, UserListQueryVariables, UserListProps<TChildProps, TDataName>>(UserListDocument, {
      alias: 'userList',
      ...operationOptions
    });
};

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        return ApolloReactHooks.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
      }
export function useUserListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = ApolloReactCommon.QueryResult<UserListQuery, UserListQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userInput: UserUpdateInput!, $id: String!) {
  updateOneUser(data: $userInput, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;