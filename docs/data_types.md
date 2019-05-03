# Data Types


* [Account](#account) - a user account
* [Identity](#identity) - a social identity (i.e. Github, Twitter, LinkedIn)
* [Experience](#experience) - a time-bounded experience where a user gained skills (i.e. job, school, coding bootcamp)
* [Place](#place) - a place where experiences happen
* [Activity](#activity) - something a user did that illustrates skills (i.e. open source project, blog post, conference talk)
* [Tool](#tool) - tool used when building software (i.e. programming language, app framework, API)
* [Trait](#trait) - aspect of a job, team, workplace or company that users may have preferences about (i.e. open floor plan)

## Account

The Account type represents a user account in Fizbuz. When a user registers, an Account record is created and it contains core bits of user information, including name and email address.

REST API path: `/api/accounts`

## Identity

Accounts can have associated Identities. An Identity represents an account on a social platform like Github or Twitter. 

Because Fizbuz uses Github OAuth for registration, each user starts out with a Github Identity record. This record cannot be deleted.

REST API path: `/api/accounts/ACxxx/identities`

## Experience

Accounts can have associated Experiences. An Experience describes a place where a user *gained skills* over a defined period of time. Examples include having a job, attending a conference, or participating in a coding bootcamp. This is kind of like the "experience" section of a resume, but with much more flexibility to include non-traditional experiences where user's level up their programming skills.

REST API path: `/api/accounts/ACxxx/experiences`

## Place

An Experience must be associated with a Place. A Place is represents where an Experience happens. A Place can be a company, a school, an online class, a conference, etc. 

REST API path: `/api/places`

## Activity

Accounts can have associated Activities. An Activity describes something that the user did that *demonstrates skills*. Examples of Activities include open source projects, blog posts, conference talks, even things like JSFiddles or Gists. 

REST API path: `/api/accounts/ACxxx/activities`

## Tool

A Tool is something used to build software. There currently 7 kinds of Tools:

* Language (i.e. Ruby, JavaScript)
* Framework (i.e. React, Express, Ruby on Rails)
* Library (jQuery, Moment)
* Device (iPhone XS, MacBook Pro, Oculus)
* Service (Twilio, AWS S3, Flickr API)
* Software (Visual Studio Code, Docker, MySQL)
* Specialty (AI, ML, AR, UX)

Think 

REST API path: `/api/tools`

## Skill

Accounts can be associated with Tools. This association is called a Skill. Skill records include metadata unique to the User that describes the level of expertise, whether to publish this Skill on their profile, etc.

REST API path: `/api/accounts/ACxxx/tools`

## Trait

A Trait is an aspect of a job that someone would consider when deciding to accept a job. Traits are broken down into 4 categories:

* Job - the job role itself
* Team - the team being joined
* Workplace - the office or place of work
* Company - the company

REST API path: `/api/traits`

## Preference

Accounts can be associated with Traits. This association is called a Preference. Preference records include metadata about how strongly the User feels about the Trait, ranging from -10 (highest negative feeling) to +10 (highest positive feeling). 

REST API path: `/api/accounts/ACxxx/traits`
