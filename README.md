# odin-tic-tac-toe

I am roughly following the clean architecture principles. But I leave out
the "Inverting Dependencies" part, for the absence of interface feature.

The `UserClickAdapter` module receives user input then
mutates Domain object's state by calling its public methods.

The `Domain` module mutates internal state
according to domain knowledge i.e. business rules.
After mutation, it ports its state using output port which
subsequently provides feedback to user.

There is no mapping between `Domain` and `GUIPort`.

Interestingly, application is assembled implicitly through module imports.
There is no explicit object creation because the Adapter and Port part of my code
are simply dumb functions. And domain object's state is captured by module level variables. 
