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
  currentUser?: Maybe<User>;
  identity?: Maybe<Identity>;
  profile?: Maybe<Profile>;
  tools: Array<Tool>;
  user?: Maybe<User>;
  userSession?: Maybe<UserSession>;
};


export type QueryIdentityArgs = {
  where: IdentityWhereUniqueInput;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryToolsArgs = {
  where?: Maybe<ToolWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ToolWhereUniqueInput>;
  before?: Maybe<ToolWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  productEmail: Scalars['Boolean'];
  promotionalEmail: Scalars['Boolean'];
  inboundConnections: Array<Connection>;
  outboundConnections: Array<Connection>;
  identities: Array<Identity>;
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


export type UserIdentitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<IdentityWhereUniqueInput>;
  before?: Maybe<IdentityWhereUniqueInput>;
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


export type IdentityWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
};

export type Identity = {
   __typename?: 'Identity';
  id: Scalars['String'];
  user: User;
  auth0Sub: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

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
  level?: Maybe<Scalars['Int']>;
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

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
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

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
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
  level?: Maybe<NullableIntFilter>;
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

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
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

export enum ActivityKind {
  Project = 'Project',
  Writing = 'Writing',
  Video = 'Video'
}

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  productEmail?: Maybe<BooleanFilter>;
  promotionalEmail?: Maybe<BooleanFilter>;
  outboundConnections?: Maybe<ConnectionFilter>;
  inboundConnections?: Maybe<ConnectionFilter>;
  identities?: Maybe<IdentityFilter>;
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

export type IdentityFilter = {
  every?: Maybe<IdentityWhereInput>;
  some?: Maybe<IdentityWhereInput>;
  none?: Maybe<IdentityWhereInput>;
};

export type IdentityWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  auth0Sub?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<IdentityWhereInput>>;
  OR?: Maybe<Array<IdentityWhereInput>>;
  NOT?: Maybe<Array<IdentityWhereInput>>;
  user?: Maybe<UserWhereInput>;
};

export type ToolWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createOneUser: User;
  updateOneProfile?: Maybe<Profile>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionCreateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionCreateManyWithoutConnectedInput>;
  identities?: Maybe<IdentityCreateManyWithoutUserInput>;
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
  level?: Maybe<Scalars['Int']>;
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

export type TraitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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

export type PlaceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ExperienceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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

export type ActivityWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionCreateManyWithoutUserInput>;
  identities?: Maybe<IdentityCreateManyWithoutUserInput>;
};

export type IdentityCreateManyWithoutUserInput = {
  create?: Maybe<Array<IdentityCreateWithoutUserInput>>;
  connect?: Maybe<Array<IdentityWhereUniqueInput>>;
};

export type IdentityCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub: Scalars['String'];
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
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionCreateManyWithoutConnectedInput>;
  identities?: Maybe<IdentityCreateManyWithoutUserInput>;
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

export type UserUpdateOneRequiredWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutProfileDataInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
};

export type UserCreateWithoutProfileInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  outboundConnections?: Maybe<ConnectionCreateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionCreateManyWithoutConnectedInput>;
  identities?: Maybe<IdentityCreateManyWithoutUserInput>;
};

export type UserUpdateWithoutProfileDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  outboundConnections?: Maybe<ConnectionUpdateManyWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionUpdateManyWithoutConnectedInput>;
  identities?: Maybe<IdentityUpdateManyWithoutUserInput>;
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
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  outboundConnections?: Maybe<ConnectionUpdateManyWithoutUserInput>;
  identities?: Maybe<IdentityUpdateManyWithoutUserInput>;
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
  level?: Maybe<NullableIntFilter>;
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

export type IdentityUpdateManyWithoutUserInput = {
  create?: Maybe<Array<IdentityCreateWithoutUserInput>>;
  connect?: Maybe<Array<IdentityWhereUniqueInput>>;
  set?: Maybe<Array<IdentityWhereUniqueInput>>;
  disconnect?: Maybe<Array<IdentityWhereUniqueInput>>;
  delete?: Maybe<Array<IdentityWhereUniqueInput>>;
  update?: Maybe<Array<IdentityUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<IdentityUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IdentityScalarWhereInput>>;
  upsert?: Maybe<Array<IdentityUpsertWithWhereUniqueWithoutUserInput>>;
};

export type IdentityUpdateWithWhereUniqueWithoutUserInput = {
  where: IdentityWhereUniqueInput;
  data: IdentityUpdateWithoutUserDataInput;
};

export type IdentityUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IdentityUpdateManyWithWhereNestedInput = {
  where: IdentityScalarWhereInput;
  data: IdentityUpdateManyDataInput;
};

export type IdentityScalarWhereInput = {
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  auth0Sub?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<NullableDateTimeFilter>;
  deletedAt?: Maybe<NullableDateTimeFilter>;
  AND?: Maybe<Array<IdentityScalarWhereInput>>;
  OR?: Maybe<Array<IdentityScalarWhereInput>>;
  NOT?: Maybe<Array<IdentityScalarWhereInput>>;
};

export type IdentityUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  auth0Sub?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type IdentityUpsertWithWhereUniqueWithoutUserInput = {
  where: IdentityWhereUniqueInput;
  update: IdentityUpdateWithoutUserDataInput;
  create: IdentityCreateWithoutUserInput;
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
  email?: Maybe<Scalars['String']>;
  productEmail?: Maybe<Scalars['Boolean']>;
  promotionalEmail?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  inboundConnections?: Maybe<ConnectionUpdateManyWithoutConnectedInput>;
  identities?: Maybe<IdentityUpdateManyWithoutUserInput>;
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

export type UserSession = {
   __typename?: 'UserSession';
  userId?: Maybe<Scalars['String']>;
};

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type UserSessionQueryVariables = {};


export type UserSessionQuery = (
  { __typename?: 'Query' }
  & { userSession?: Maybe<(
    { __typename?: 'UserSession' }
    & Pick<UserSession, 'userId'>
  )> }
);

export type ProfileInfoFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id' | 'nickname' | 'name'>
);

export type ProfileQueryVariables = {
  userId: Scalars['String'];
};


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & ProfileInfoFragment
    )> }
  )> }
);

export type IdentityQueryVariables = {
  sub?: Maybe<Scalars['String']>;
};


export type IdentityQuery = (
  { __typename?: 'Query' }
  & { identity?: Maybe<(
    { __typename?: 'Identity' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
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
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'name' | 'nickname'>
    )> }
  ) }
);

export type HomeQueryVariables = {};


export type HomeQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'nickname' | 'name'>
      & { skills: Array<(
        { __typename?: 'Skill' }
        & { tool: (
          { __typename?: 'Tool' }
          & Pick<Tool, 'name'>
        ) }
      )> }
    )> }
  )> }
);

export type UpdateProfileMutationVariables = {
  profileUpdateInput: ProfileUpdateInput;
  id: Scalars['String'];
};


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProfile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'nickname' | 'name'>
  )> }
);

export type ProfileByNicknameQueryVariables = {
  nickname: Scalars['String'];
};


export type ProfileByNicknameQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'nickname'>
  )> }
);

export type CreateSkillsMutationVariables = {
  profileUpdateInput: ProfileUpdateInput;
  id: Scalars['String'];
};


export type CreateSkillsMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProfile?: Maybe<(
    { __typename?: 'Profile' }
    & { skills: Array<(
      { __typename?: 'Skill' }
      & { tool: (
        { __typename?: 'Tool' }
        & Pick<Tool, 'name'>
      ) }
    )> }
  )> }
);

export type ToolListQueryVariables = {};


export type ToolListQuery = (
  { __typename?: 'Query' }
  & { tools: Array<(
    { __typename?: 'Tool' }
    & Pick<Tool, 'id' | 'name' | 'kind'>
  )> }
);

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  email
}
    `;
export const ProfileInfoFragmentDoc = gql`
    fragment ProfileInfo on Profile {
  id
  nickname
  name
}
    `;
export const UserSessionDocument = gql`
    query UserSession {
  userSession @client {
    userId
  }
}
    `;
export type UserSessionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserSessionQuery, UserSessionQueryVariables>
    } & TChildProps;
export function withUserSession<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserSessionQuery,
  UserSessionQueryVariables,
  UserSessionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserSessionQuery, UserSessionQueryVariables, UserSessionProps<TChildProps, TDataName>>(UserSessionDocument, {
      alias: 'userSession',
      ...operationOptions
    });
};

/**
 * __useUserSessionQuery__
 *
 * To run a query within a React component, call `useUserSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserSessionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserSessionQuery, UserSessionQueryVariables>) {
        return ApolloReactHooks.useQuery<UserSessionQuery, UserSessionQueryVariables>(UserSessionDocument, baseOptions);
      }
export function useUserSessionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserSessionQuery, UserSessionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserSessionQuery, UserSessionQueryVariables>(UserSessionDocument, baseOptions);
        }
export type UserSessionQueryHookResult = ReturnType<typeof useUserSessionQuery>;
export type UserSessionLazyQueryHookResult = ReturnType<typeof useUserSessionLazyQuery>;
export type UserSessionQueryResult = ApolloReactCommon.QueryResult<UserSessionQuery, UserSessionQueryVariables>;
export const ProfileDocument = gql`
    query Profile($userId: String!) {
  user(where: {id: $userId}) {
    profile {
      ...ProfileInfo
    }
  }
}
    ${ProfileInfoFragmentDoc}`;
export type ProfileProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProfileQuery, ProfileQueryVariables>
    } & TChildProps;
export function withProfile<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProfileQuery,
  ProfileQueryVariables,
  ProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProfileQuery, ProfileQueryVariables, ProfileProps<TChildProps, TDataName>>(ProfileDocument, {
      alias: 'profile',
      ...operationOptions
    });
};

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = ApolloReactCommon.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const IdentityDocument = gql`
    query Identity($sub: String) {
  identity(where: {auth0Sub: $sub}) {
    user {
      id
    }
  }
}
    `;
export type IdentityProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IdentityQuery, IdentityQueryVariables>
    } & TChildProps;
export function withIdentity<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IdentityQuery,
  IdentityQueryVariables,
  IdentityProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IdentityQuery, IdentityQueryVariables, IdentityProps<TChildProps, TDataName>>(IdentityDocument, {
      alias: 'identity',
      ...operationOptions
    });
};

/**
 * __useIdentityQuery__
 *
 * To run a query within a React component, call `useIdentityQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdentityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdentityQuery({
 *   variables: {
 *      sub: // value for 'sub'
 *   },
 * });
 */
export function useIdentityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IdentityQuery, IdentityQueryVariables>) {
        return ApolloReactHooks.useQuery<IdentityQuery, IdentityQueryVariables>(IdentityDocument, baseOptions);
      }
export function useIdentityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IdentityQuery, IdentityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IdentityQuery, IdentityQueryVariables>(IdentityDocument, baseOptions);
        }
export type IdentityQueryHookResult = ReturnType<typeof useIdentityQuery>;
export type IdentityLazyQueryHookResult = ReturnType<typeof useIdentityLazyQuery>;
export type IdentityQueryResult = ApolloReactCommon.QueryResult<IdentityQuery, IdentityQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($userInput: UserCreateInput!) {
  createOneUser(data: $userInput) {
    id
    profile {
      id
      name
      nickname
    }
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
export const HomeDocument = gql`
    query Home {
  currentUser {
    profile {
      nickname
      name
      skills {
        tool {
          name
        }
      }
    }
  }
}
    `;
export type HomeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HomeQuery, HomeQueryVariables>
    } & TChildProps;
export function withHome<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HomeQuery,
  HomeQueryVariables,
  HomeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HomeQuery, HomeQueryVariables, HomeProps<TChildProps, TDataName>>(HomeDocument, {
      alias: 'home',
      ...operationOptions
    });
};

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        return ApolloReactHooks.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
      }
export function useHomeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = ApolloReactCommon.QueryResult<HomeQuery, HomeQueryVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
  updateOneProfile(data: $profileUpdateInput, where: {id: $id}) {
    nickname
    name
  }
}
    `;
export type UpdateProfileMutationFn = ApolloReactCommon.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;
export type UpdateProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>
    } & TChildProps;
export function withUpdateProfile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProfileMutation,
  UpdateProfileMutationVariables,
  UpdateProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProfileMutation, UpdateProfileMutationVariables, UpdateProfileProps<TChildProps, TDataName>>(UpdateProfileDocument, {
      alias: 'updateProfile',
      ...operationOptions
    });
};

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      profileUpdateInput: // value for 'profileUpdateInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, baseOptions);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = ApolloReactCommon.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const ProfileByNicknameDocument = gql`
    query ProfileByNickname($nickname: String!) {
  profile(where: {nickname: $nickname}) {
    nickname
  }
}
    `;
export type ProfileByNicknameProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProfileByNicknameQuery, ProfileByNicknameQueryVariables>
    } & TChildProps;
export function withProfileByNickname<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProfileByNicknameQuery,
  ProfileByNicknameQueryVariables,
  ProfileByNicknameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProfileByNicknameQuery, ProfileByNicknameQueryVariables, ProfileByNicknameProps<TChildProps, TDataName>>(ProfileByNicknameDocument, {
      alias: 'profileByNickname',
      ...operationOptions
    });
};

/**
 * __useProfileByNicknameQuery__
 *
 * To run a query within a React component, call `useProfileByNicknameQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileByNicknameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileByNicknameQuery({
 *   variables: {
 *      nickname: // value for 'nickname'
 *   },
 * });
 */
export function useProfileByNicknameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileByNicknameQuery, ProfileByNicknameQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfileByNicknameQuery, ProfileByNicknameQueryVariables>(ProfileByNicknameDocument, baseOptions);
      }
export function useProfileByNicknameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileByNicknameQuery, ProfileByNicknameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfileByNicknameQuery, ProfileByNicknameQueryVariables>(ProfileByNicknameDocument, baseOptions);
        }
export type ProfileByNicknameQueryHookResult = ReturnType<typeof useProfileByNicknameQuery>;
export type ProfileByNicknameLazyQueryHookResult = ReturnType<typeof useProfileByNicknameLazyQuery>;
export type ProfileByNicknameQueryResult = ApolloReactCommon.QueryResult<ProfileByNicknameQuery, ProfileByNicknameQueryVariables>;
export const CreateSkillsDocument = gql`
    mutation CreateSkills($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
  updateOneProfile(data: $profileUpdateInput, where: {id: $id}) {
    skills {
      tool {
        name
      }
    }
  }
}
    `;
export type CreateSkillsMutationFn = ApolloReactCommon.MutationFunction<CreateSkillsMutation, CreateSkillsMutationVariables>;
export type CreateSkillsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateSkillsMutation, CreateSkillsMutationVariables>
    } & TChildProps;
export function withCreateSkills<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSkillsMutation,
  CreateSkillsMutationVariables,
  CreateSkillsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSkillsMutation, CreateSkillsMutationVariables, CreateSkillsProps<TChildProps, TDataName>>(CreateSkillsDocument, {
      alias: 'createSkills',
      ...operationOptions
    });
};

/**
 * __useCreateSkillsMutation__
 *
 * To run a mutation, you first call `useCreateSkillsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSkillsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSkillsMutation, { data, loading, error }] = useCreateSkillsMutation({
 *   variables: {
 *      profileUpdateInput: // value for 'profileUpdateInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateSkillsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSkillsMutation, CreateSkillsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSkillsMutation, CreateSkillsMutationVariables>(CreateSkillsDocument, baseOptions);
      }
export type CreateSkillsMutationHookResult = ReturnType<typeof useCreateSkillsMutation>;
export type CreateSkillsMutationResult = ApolloReactCommon.MutationResult<CreateSkillsMutation>;
export type CreateSkillsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSkillsMutation, CreateSkillsMutationVariables>;
export const ToolListDocument = gql`
    query ToolList {
  tools {
    id
    name
    kind
  }
}
    `;
export type ToolListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ToolListQuery, ToolListQueryVariables>
    } & TChildProps;
export function withToolList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToolListQuery,
  ToolListQueryVariables,
  ToolListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ToolListQuery, ToolListQueryVariables, ToolListProps<TChildProps, TDataName>>(ToolListDocument, {
      alias: 'toolList',
      ...operationOptions
    });
};

/**
 * __useToolListQuery__
 *
 * To run a query within a React component, call `useToolListQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolListQuery({
 *   variables: {
 *   },
 * });
 */
export function useToolListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ToolListQuery, ToolListQueryVariables>) {
        return ApolloReactHooks.useQuery<ToolListQuery, ToolListQueryVariables>(ToolListDocument, baseOptions);
      }
export function useToolListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ToolListQuery, ToolListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ToolListQuery, ToolListQueryVariables>(ToolListDocument, baseOptions);
        }
export type ToolListQueryHookResult = ReturnType<typeof useToolListQuery>;
export type ToolListLazyQueryHookResult = ReturnType<typeof useToolListLazyQuery>;
export type ToolListQueryResult = ApolloReactCommon.QueryResult<ToolListQuery, ToolListQueryVariables>;