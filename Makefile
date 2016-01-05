TESTCASES = tests/**.js

# Bored of testing ? Try this:
# NODE_ENV=test mocha $(TESTCASES) --reporter nyan tests -b

test:
	NODE_ENV=test mocha --compilers js:babel-register $(TESTCASES) --reporter spec tests -b

# The "make" program always try to find a target file with
# the indicated name to build. This is not the case as we just want
# it to run the script without compiling anything.
# .PHONY helps excluding the test folder from being built by make.
.PHONY: test