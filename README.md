
- Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.


## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see thier data. Clicking on the card should instead display a show view (`BotSpecs`) for that bot, which should replace `BotsCollection`. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot. Your app could look like the following:

![alt text][full_demo]

[full_demo]: ./public/full_demo.gif "Full demo"

- Sort bots by their health, damage or armor. For this, create a new component, `SortBar`.
- When I enlist a bot it will be **removed** from the `BotCollection` and added to `YourBotArmy`.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component, `SortBar`.
- Only enlist **one** bot from each `bot_class`. The classes are `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-4.md).
