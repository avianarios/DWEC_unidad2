
# Event propagation

The standard DOM Events describes 3 phases of event propagation:

1. **Capturing phase** – the event goes all the way down from `Window > Document > HTML > ...` to the element.
2. **Target phase** – the event reached the target element. It is not handled separately, but at capturing and at bubbling phase.
3. **Bubbling phase** – the event bubbles all the way up from the element to `HTML > Document > Window`.


