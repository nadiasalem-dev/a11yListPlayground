# a11yListPlayground

## What is this?
This is a practice app using React Native. I am building a very basic list app while focusing on accessibility from the start.

## Why did I build this?
I watched a demonstration by Apple at the CSUN Assistive Technology Conference in 2026 and wanted to try it myself. Their demo used Swift, so I want to see if I can build something similar using React Native, including testing accessibility features.

## What does it do right now?
- Nothing yet (initial setup phase)

## Accessibility decisions
- Make sure the "Add Item" button has a meaningful accessibility label instead of just "button"
- Use color-blind-friendly dots aligned with the first line of each list item to help indicate structure
- Avoid relying only on color; include category information in accessibility labels
- Design interactions carefully so actions like deleting items are clearly distinguishable from screen reader gestures

## Future plans
- Start by building the basic UI
- Add accessible list functionality
- Test with screen readers (VoiceOver / TalkBack)
- Explore edge cases like dynamic text resizing
