Feature: User can create a post
  Scenario: Post have all required fields
    Given I am a common user
      And I create a user for post
    When this user creates a post
    Then I expect the answer
    | Check type | Response part | Path         | Compare type | Expected         |
    | valueOf    | statusCode    |              | is           | 201              |
    | typeOf     | statusCode    |              | is           | number           |
    | valueOf    | body          | $.data.id    | is           | notNull          |
    | typeOf     | body          | $.data.id    | is           | number           |
    | valueOf    | header        | content-type | contains     | application/json |
    | typeOf     | header        | content-type | is           | string           |