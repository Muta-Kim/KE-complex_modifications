{
  "title": "Maps Screenshot to eject for Keychron K series",
  "rules": [
    {
      "description": "Screenshot to eject",
      "manipulators": [
        {
          "from": {
            "key_code": "4",
            "modifiers": {
              "mandatory": [
                "left_command",
                "left_shift"
              ]
            }
          },
          "to": [
            {
            "consumer_key_code": "eject"
            }
          ],
          "type": "basic"
        }
      ]
    }
  ]
}
