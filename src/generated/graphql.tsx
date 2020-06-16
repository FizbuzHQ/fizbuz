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
  tools: Array<Tool>;
  user?: Maybe<User>;
  profile?: Maybe<Profile>;
  identity?: Maybe<Identity>;
  skill?: Maybe<Skill>;
  currentUser?: Maybe<User>;
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


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryIdentityArgs = {
  where: IdentityWhereUniqueInput;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};

export type ToolWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  nameSearch?: Maybe<StringFilter>;
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

export enum ToolKind {
  Language = 'Language',
  Framework = 'Framework',
  Library = 'Library',
  Device = 'Device',
  Service = 'Service',
  Software = 'Software',
  Specialty = 'Specialty'
}

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
  nicknameSearch?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  photo?: Maybe<NullableStringFilter>;
  location?: Maybe<NullableStringFilter>;
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
  nameSearch?: Maybe<StringFilter>;
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

export enum TraitKind {
  Role = 'Role',
  Team = 'Team',
  Workplace = 'Workplace',
  Company = 'Company'
}

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
  nameSearch?: Maybe<StringFilter>;
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
  emailSearch?: Maybe<StringFilter>;
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
  nameSearch?: Maybe<Scalars['String']>;
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

export type Profile = {
   __typename?: 'Profile';
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
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

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailSearch?: Maybe<Scalars['String']>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  nicknameSearch?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createOneUser: User;
  updateOneProfile?: Maybe<Profile>;
  createOneTool: Tool;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationCreateOneToolArgs = {
  data: ToolCreateInput;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailSearch: Scalars['String'];
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
  nicknameSearch: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
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
  nameSearch: Scalars['String'];
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
  nameSearch: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type TraitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameSearch?: Maybe<Scalars['String']>;
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
  nameSearch: Scalars['String'];
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
  nameSearch?: Maybe<Scalars['String']>;
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
  emailSearch: Scalars['String'];
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
  emailSearch: Scalars['String'];
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
  nicknameSearch?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
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
  emailSearch: Scalars['String'];
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
  emailSearch?: Maybe<Scalars['String']>;
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
  emailSearch?: Maybe<Scalars['String']>;
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
  nicknameSearch?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
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
  nameSearch?: Maybe<Scalars['String']>;
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
  nameSearch?: Maybe<Scalars['String']>;
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
  nameSearch?: Maybe<Scalars['String']>;
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
  emailSearch?: Maybe<Scalars['String']>;
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

export type ToolCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameSearch: Scalars['String'];
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
  level?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  profile: ProfileCreateOneWithoutSkillsInput;
};

export type ProfileCreateOneWithoutSkillsInput = {
  create?: Maybe<ProfileCreateWithoutSkillsInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutSkillsInput = {
  id?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  nicknameSearch: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
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

export type UserCreateOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
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

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 * 
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
   __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 * 
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 * 
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
   __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
   __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
   __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

export type ToolInfoFragment = (
  { __typename?: 'Tool' }
  & Pick<Tool, 'id' | 'name' | 'kind'>
);

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
);

export type SkillInfoFragment = (
  { __typename?: 'Skill' }
  & Pick<Skill, 'id' | 'level' | 'comment'>
  & { tool: (
    { __typename?: 'Tool' }
    & ToolInfoFragment
  ) }
);

export type ProfileInfoFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id' | 'nickname' | 'name' | 'photo' | 'about'>
);

export type FullProfileFragment = (
  { __typename?: 'User' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & { skills: Array<(
      { __typename?: 'Skill' }
      & SkillInfoFragment
    )> }
    & ProfileInfoFragment
  )> }
  & UserInfoFragment
);

export type ToolKindListQueryVariables = {};


export type ToolKindListQuery = (
  { __typename?: 'Query' }
  & { __type?: Maybe<(
    { __typename?: '__Type' }
    & { enumValues?: Maybe<Array<(
      { __typename?: '__EnumValue' }
      & Pick<__EnumValue, 'name'>
    )>> }
  )> }
);

export type ToolListQueryVariables = {};


export type ToolListQuery = (
  { __typename?: 'Query' }
  & { tools: Array<(
    { __typename?: 'Tool' }
    & ToolInfoFragment
  )> }
);

export type GetCurrentUserProfileQueryVariables = {};


export type GetCurrentUserProfileQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & ProfileInfoFragment
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
    & ProfileInfoFragment
  )> }
);

export type ProfileSkillsInfoFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id'>
  & { skills: Array<(
    { __typename?: 'Skill' }
    & SkillInfoFragment
  )> }
);

export type GetUserSkillsQueryVariables = {};


export type GetUserSkillsQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & ProfileSkillsInfoFragment
    )> }
  )> }
);

export type GetSkillQueryVariables = {
  skillWhereUniqueInput: SkillWhereUniqueInput;
};


export type GetSkillQuery = (
  { __typename?: 'Query' }
  & { skill?: Maybe<(
    { __typename?: 'Skill' }
    & SkillInfoFragment
  )> }
);

export type UpdateSkillMutationVariables = {
  profileUpdateInput: ProfileUpdateInput;
  id: Scalars['String'];
};


export type UpdateSkillMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProfile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id'>
    & { skills: Array<(
      { __typename?: 'Skill' }
      & SkillInfoFragment
    )> }
  )> }
);

export type UpdateProfileSkillsMutationVariables = {
  profileUpdateInput: ProfileUpdateInput;
  id: Scalars['String'];
};


export type UpdateProfileSkillsMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProfile?: Maybe<(
    { __typename?: 'Profile' }
    & ProfileSkillsInfoFragment
  )> }
);

export type CreateToolMutationVariables = {
  toolCreateInput: ToolCreateInput;
};


export type CreateToolMutation = (
  { __typename?: 'Mutation' }
  & { createOneTool: (
    { __typename?: 'Tool' }
    & ToolInfoFragment
  ) }
);

export type ProfileByNicknameQueryVariables = {
  nickname: Scalars['String'];
};


export type ProfileByNicknameQuery = (
  { __typename?: 'Query' }
  & { profile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id'>
  )> }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'name' | 'photo'>
    )> }
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
      & Pick<Profile, 'id' | 'name' | 'nickname' | 'photo'>
    )> }
  ) }
);

export type HomeQueryVariables = {};


export type HomeQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & FullProfileFragment
  )> }
);

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
}
    `;
export const ProfileInfoFragmentDoc = gql`
    fragment ProfileInfo on Profile {
  id
  nickname
  name
  photo
  about
}
    `;
export const ToolInfoFragmentDoc = gql`
    fragment ToolInfo on Tool {
  id
  name
  kind
}
    `;
export const SkillInfoFragmentDoc = gql`
    fragment SkillInfo on Skill {
  id
  level
  comment
  tool {
    ...ToolInfo
  }
}
    ${ToolInfoFragmentDoc}`;
export const FullProfileFragmentDoc = gql`
    fragment FullProfile on User {
  ...UserInfo
  profile {
    ...ProfileInfo
    skills {
      ...SkillInfo
    }
  }
}
    ${UserInfoFragmentDoc}
${ProfileInfoFragmentDoc}
${SkillInfoFragmentDoc}`;
export const ProfileSkillsInfoFragmentDoc = gql`
    fragment ProfileSkillsInfo on Profile {
  id
  skills {
    ...SkillInfo
  }
}
    ${SkillInfoFragmentDoc}`;
export const ToolKindListDocument = gql`
    query ToolKindList {
  __type(name: "ToolKind") {
    enumValues {
      name
    }
  }
}
    `;
export type ToolKindListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ToolKindListQuery, ToolKindListQueryVariables>
    } & TChildProps;
export function withToolKindList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToolKindListQuery,
  ToolKindListQueryVariables,
  ToolKindListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ToolKindListQuery, ToolKindListQueryVariables, ToolKindListProps<TChildProps, TDataName>>(ToolKindListDocument, {
      alias: 'toolKindList',
      ...operationOptions
    });
};

/**
 * __useToolKindListQuery__
 *
 * To run a query within a React component, call `useToolKindListQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolKindListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolKindListQuery({
 *   variables: {
 *   },
 * });
 */
export function useToolKindListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ToolKindListQuery, ToolKindListQueryVariables>) {
        return ApolloReactHooks.useQuery<ToolKindListQuery, ToolKindListQueryVariables>(ToolKindListDocument, baseOptions);
      }
export function useToolKindListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ToolKindListQuery, ToolKindListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ToolKindListQuery, ToolKindListQueryVariables>(ToolKindListDocument, baseOptions);
        }
export type ToolKindListQueryHookResult = ReturnType<typeof useToolKindListQuery>;
export type ToolKindListLazyQueryHookResult = ReturnType<typeof useToolKindListLazyQuery>;
export type ToolKindListQueryResult = ApolloReactCommon.QueryResult<ToolKindListQuery, ToolKindListQueryVariables>;
export const ToolListDocument = gql`
    query ToolList {
  tools(where: {verified: {equals: true}}) {
    ...ToolInfo
  }
}
    ${ToolInfoFragmentDoc}`;
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
export const GetCurrentUserProfileDocument = gql`
    query GetCurrentUserProfile {
  currentUser {
    id
    profile {
      ...ProfileInfo
    }
  }
}
    ${ProfileInfoFragmentDoc}`;
export type GetCurrentUserProfileProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>
    } & TChildProps;
export function withGetCurrentUserProfile<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCurrentUserProfileQuery,
  GetCurrentUserProfileQueryVariables,
  GetCurrentUserProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables, GetCurrentUserProfileProps<TChildProps, TDataName>>(GetCurrentUserProfileDocument, {
      alias: 'getCurrentUserProfile',
      ...operationOptions
    });
};

/**
 * __useGetCurrentUserProfileQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>(GetCurrentUserProfileDocument, baseOptions);
      }
export function useGetCurrentUserProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>(GetCurrentUserProfileDocument, baseOptions);
        }
export type GetCurrentUserProfileQueryHookResult = ReturnType<typeof useGetCurrentUserProfileQuery>;
export type GetCurrentUserProfileLazyQueryHookResult = ReturnType<typeof useGetCurrentUserProfileLazyQuery>;
export type GetCurrentUserProfileQueryResult = ApolloReactCommon.QueryResult<GetCurrentUserProfileQuery, GetCurrentUserProfileQueryVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
  updateOneProfile(data: $profileUpdateInput, where: {id: $id}) {
    ...ProfileInfo
  }
}
    ${ProfileInfoFragmentDoc}`;
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
export const GetUserSkillsDocument = gql`
    query GetUserSkills {
  currentUser {
    id
    profile {
      ...ProfileSkillsInfo
    }
  }
}
    ${ProfileSkillsInfoFragmentDoc}`;
export type GetUserSkillsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserSkillsQuery, GetUserSkillsQueryVariables>
    } & TChildProps;
export function withGetUserSkills<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserSkillsQuery,
  GetUserSkillsQueryVariables,
  GetUserSkillsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserSkillsQuery, GetUserSkillsQueryVariables, GetUserSkillsProps<TChildProps, TDataName>>(GetUserSkillsDocument, {
      alias: 'getUserSkills',
      ...operationOptions
    });
};

/**
 * __useGetUserSkillsQuery__
 *
 * To run a query within a React component, call `useGetUserSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserSkillsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserSkillsQuery, GetUserSkillsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserSkillsQuery, GetUserSkillsQueryVariables>(GetUserSkillsDocument, baseOptions);
      }
export function useGetUserSkillsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserSkillsQuery, GetUserSkillsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserSkillsQuery, GetUserSkillsQueryVariables>(GetUserSkillsDocument, baseOptions);
        }
export type GetUserSkillsQueryHookResult = ReturnType<typeof useGetUserSkillsQuery>;
export type GetUserSkillsLazyQueryHookResult = ReturnType<typeof useGetUserSkillsLazyQuery>;
export type GetUserSkillsQueryResult = ApolloReactCommon.QueryResult<GetUserSkillsQuery, GetUserSkillsQueryVariables>;
export const GetSkillDocument = gql`
    query GetSkill($skillWhereUniqueInput: SkillWhereUniqueInput!) {
  skill(where: $skillWhereUniqueInput) {
    ...SkillInfo
  }
}
    ${SkillInfoFragmentDoc}`;
export type GetSkillProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSkillQuery, GetSkillQueryVariables>
    } & TChildProps;
export function withGetSkill<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSkillQuery,
  GetSkillQueryVariables,
  GetSkillProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSkillQuery, GetSkillQueryVariables, GetSkillProps<TChildProps, TDataName>>(GetSkillDocument, {
      alias: 'getSkill',
      ...operationOptions
    });
};

/**
 * __useGetSkillQuery__
 *
 * To run a query within a React component, call `useGetSkillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillQuery({
 *   variables: {
 *      skillWhereUniqueInput: // value for 'skillWhereUniqueInput'
 *   },
 * });
 */
export function useGetSkillQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSkillQuery, GetSkillQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSkillQuery, GetSkillQueryVariables>(GetSkillDocument, baseOptions);
      }
export function useGetSkillLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSkillQuery, GetSkillQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSkillQuery, GetSkillQueryVariables>(GetSkillDocument, baseOptions);
        }
export type GetSkillQueryHookResult = ReturnType<typeof useGetSkillQuery>;
export type GetSkillLazyQueryHookResult = ReturnType<typeof useGetSkillLazyQuery>;
export type GetSkillQueryResult = ApolloReactCommon.QueryResult<GetSkillQuery, GetSkillQueryVariables>;
export const UpdateSkillDocument = gql`
    mutation UpdateSkill($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
  updateOneProfile(data: $profileUpdateInput, where: {id: $id}) {
    id
    skills {
      ...SkillInfo
    }
  }
}
    ${SkillInfoFragmentDoc}`;
export type UpdateSkillMutationFn = ApolloReactCommon.MutationFunction<UpdateSkillMutation, UpdateSkillMutationVariables>;
export type UpdateSkillProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateSkillMutation, UpdateSkillMutationVariables>
    } & TChildProps;
export function withUpdateSkill<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateSkillMutation,
  UpdateSkillMutationVariables,
  UpdateSkillProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateSkillMutation, UpdateSkillMutationVariables, UpdateSkillProps<TChildProps, TDataName>>(UpdateSkillDocument, {
      alias: 'updateSkill',
      ...operationOptions
    });
};

/**
 * __useUpdateSkillMutation__
 *
 * To run a mutation, you first call `useUpdateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSkillMutation, { data, loading, error }] = useUpdateSkillMutation({
 *   variables: {
 *      profileUpdateInput: // value for 'profileUpdateInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateSkillMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSkillMutation, UpdateSkillMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSkillMutation, UpdateSkillMutationVariables>(UpdateSkillDocument, baseOptions);
      }
export type UpdateSkillMutationHookResult = ReturnType<typeof useUpdateSkillMutation>;
export type UpdateSkillMutationResult = ApolloReactCommon.MutationResult<UpdateSkillMutation>;
export type UpdateSkillMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSkillMutation, UpdateSkillMutationVariables>;
export const UpdateProfileSkillsDocument = gql`
    mutation UpdateProfileSkills($profileUpdateInput: ProfileUpdateInput!, $id: String!) {
  updateOneProfile(data: $profileUpdateInput, where: {id: $id}) {
    ...ProfileSkillsInfo
  }
}
    ${ProfileSkillsInfoFragmentDoc}`;
export type UpdateProfileSkillsMutationFn = ApolloReactCommon.MutationFunction<UpdateProfileSkillsMutation, UpdateProfileSkillsMutationVariables>;
export type UpdateProfileSkillsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateProfileSkillsMutation, UpdateProfileSkillsMutationVariables>
    } & TChildProps;
export function withUpdateProfileSkills<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProfileSkillsMutation,
  UpdateProfileSkillsMutationVariables,
  UpdateProfileSkillsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProfileSkillsMutation, UpdateProfileSkillsMutationVariables, UpdateProfileSkillsProps<TChildProps, TDataName>>(UpdateProfileSkillsDocument, {
      alias: 'updateProfileSkills',
      ...operationOptions
    });
};

/**
 * __useUpdateProfileSkillsMutation__
 *
 * To run a mutation, you first call `useUpdateProfileSkillsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileSkillsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileSkillsMutation, { data, loading, error }] = useUpdateProfileSkillsMutation({
 *   variables: {
 *      profileUpdateInput: // value for 'profileUpdateInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProfileSkillsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProfileSkillsMutation, UpdateProfileSkillsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProfileSkillsMutation, UpdateProfileSkillsMutationVariables>(UpdateProfileSkillsDocument, baseOptions);
      }
export type UpdateProfileSkillsMutationHookResult = ReturnType<typeof useUpdateProfileSkillsMutation>;
export type UpdateProfileSkillsMutationResult = ApolloReactCommon.MutationResult<UpdateProfileSkillsMutation>;
export type UpdateProfileSkillsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProfileSkillsMutation, UpdateProfileSkillsMutationVariables>;
export const CreateToolDocument = gql`
    mutation createTool($toolCreateInput: ToolCreateInput!) {
  createOneTool(data: $toolCreateInput) {
    ...ToolInfo
  }
}
    ${ToolInfoFragmentDoc}`;
export type CreateToolMutationFn = ApolloReactCommon.MutationFunction<CreateToolMutation, CreateToolMutationVariables>;
export type CreateToolProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateToolMutation, CreateToolMutationVariables>
    } & TChildProps;
export function withCreateTool<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateToolMutation,
  CreateToolMutationVariables,
  CreateToolProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateToolMutation, CreateToolMutationVariables, CreateToolProps<TChildProps, TDataName>>(CreateToolDocument, {
      alias: 'createTool',
      ...operationOptions
    });
};

/**
 * __useCreateToolMutation__
 *
 * To run a mutation, you first call `useCreateToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToolMutation, { data, loading, error }] = useCreateToolMutation({
 *   variables: {
 *      toolCreateInput: // value for 'toolCreateInput'
 *   },
 * });
 */
export function useCreateToolMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateToolMutation, CreateToolMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateToolMutation, CreateToolMutationVariables>(CreateToolDocument, baseOptions);
      }
export type CreateToolMutationHookResult = ReturnType<typeof useCreateToolMutation>;
export type CreateToolMutationResult = ApolloReactCommon.MutationResult<CreateToolMutation>;
export type CreateToolMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateToolMutation, CreateToolMutationVariables>;
export const ProfileByNicknameDocument = gql`
    query ProfileByNickname($nickname: String!) {
  profile(where: {nicknameSearch: $nickname}) {
    id
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
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    profile {
      id
      name
      photo
    }
  }
}
    `;
export type CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserQuery, CurrentUserQueryVariables>
    } & TChildProps;
export function withCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserQuery, CurrentUserQueryVariables, CurrentUserProps<TChildProps, TDataName>>(CurrentUserDocument, {
      alias: 'currentUser',
      ...operationOptions
    });
};

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($userInput: UserCreateInput!) {
  createOneUser(data: $userInput) {
    id
    profile {
      id
      name
      nickname
      photo
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
    ...FullProfile
  }
}
    ${FullProfileFragmentDoc}`;
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