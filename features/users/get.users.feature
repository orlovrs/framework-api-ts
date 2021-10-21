Feature: User can get lists of users
  Scenario: List contains 20 elements
    Given I am a common user
    When I get list of users
    Then I expect the answer
    | Check type | Response part | Path         | Compare type | Expected         |
    | valueOf    | statusCode    |              | is           | 200              |
    | typeOf     | statusCode    |              | is           | number           |
    | valueOf    | body          | $.data[2].id | is           | notNull          |
    | typeOf     | body          | $.data[2].id | is           | number           |
    | valueOf    | header        | content-type | contains     | application/json |
    | typeOf     | header        | content-type | is           | string           |
      And I expect size of "$.data" equals to 20