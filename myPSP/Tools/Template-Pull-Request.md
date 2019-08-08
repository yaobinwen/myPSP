# Template: Pull Request

## 1. Introduction

This is the template of a Pull Request's description.

## 2. Template

A Pull Request's description should include the following aspects.

### 2.1 Summary

This is a one-liner to briefly describe **what** the Pull Request does.

This is **NOT** **how** the PR is implemented or **why** the PR is needed, both of which can be discussed in the elaboration part. This summary should conform to ["5. Use the imperative mood in the subject line"](https://chris.beams.io/posts/git-commit/#imperative).

### 2.2 Elaboration

The elaboration part follows the summary. It can be as short as one sentence or as long as multiple paragraphs.

In general, this part may include the following, but not limited to, aspects:

- **The background** talks about **why** this PR is needed. It may also give references to the related commits, issues, or external links. Please refer to "2.4 Organizing References" for how to write a reference.
- **Design decisions** talks about why a particular design decision is made that way, such as the trade-offs.
- **Noticeable changes** talks about the non-trivial changes that others should pay attention to.

### 2.3 Tests and Results

In general, this part may include the following but not limited to aspects:

- How this PR is tested:
  - Test environment
  - Test types (unit; integrated; regression; etc.)
  - Test cases
- Test coverage (if applicable).
- Test results.

### 2.4 Code Style Checker Results

This part should list the code style checker results.

### 2.5 Review Points

If you have some things that want to bring attention to the reviewers, list them here.

### 2.6 Test Build

If a deployed build is available for the reviewers to test, put the link to the build here.

Meanwhile, also elaborate how to test the patch, for example:

- Where to find the test data.
- What are the conditions that must be met in order to test a behavior.
- What are the potential difficulties or obstacles of testing the behaviors.

### 2.7 References

In general, this part provides all the related links that the previous parts can use.

#### 2.7.1 General Formatting

In general, there may be three types of references:

- Commits
- Issues(including other Pull Requests)
- External links

It is recommended **NOT** to put the references inline directly to avoid splitting the description with long links in order to give the readers a fluent reading experience. Instead, index the references and use the indices in the elaboration.

For example, the following is considered not good (but it's not wrong):

```
Please refer to ["A guide to Nvidia Optimus on Dell PCs with an Ubuntu Operating System"](https://www.dell.com/support/article/ba/en/babsdt1/sln298431/a-guide-to-nvidia-optimus-on-dell-pcs-with-an-ubuntu-operating-system?lang=en) and the [Optimus Whitepaper](https://www.nvidia.com/object/LO_optimus_whitepapers.html) for more information.
```

It is recommended to write in this way:

```
Please refer to [1] and [2] for more information.

References:

- [1] [A guide to Nvidia Optimus on Dell PCs with an Ubuntu Operating System](https://www.dell.com/support/article/ba/en/babsdt1/sln298431/a-guide-to-nvidia-optimus-on-dell-pcs-with-an-ubuntu-operating-system?lang=en)
- [2] [Optimus Whitepaper](https://www.nvidia.com/object/LO_optimus_whitepapers.html)
```

#### 2.7.2 Links Formatting

It is recommended to refer to a commit's SHA in its short form. See ["Commit SHAs"](https://help.github.com/articles/autolinked-references-and-urls/#commit-shas) for more details.

- `SHA`
- `Username@SHA`
- `Username/Repository@SHA`

It is recommended to refer to an issue or Pull Request in its short form. See [Issues and pull requests](https://help.github.com/articles/autolinked-references-and-urls/#issues-and-pull-requests) for more details.

- `#number`
- `Username/Repository#number`
- `Organization/Repository#number`

The external links have to be full.
