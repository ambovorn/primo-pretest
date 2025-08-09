# primo-pretest
### Question 13 on Primo's Pretest 08/08/2025
Assignment Details:
> Please write a typescript project with unit test:\
For implementing function with this interface\
```merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []```\
That returns sorted array by ascending.\
given ```collection_1, collection_3``` already sorted from **min(0)** to **max**
```collection_2``` already sorted from **max** to **min(0)**\
Please provide accessible repo of typescript project with unit test
and provide how to setup dependency and execute code and unit test\
Note: Don't allow to use any sort function

### Setup
If Typescript is not yet installed, run:
```
npm install -g typescript
```

### Run
Navigate to the project's root directory:
```
cd /path/to/project/primo-pretest
```
Use this command to run unit tests:
```
npm test
```

### Key files
```
Merge Function: ~/src/merge.ts
Test Cases: ~/tests/index.test.ts
```
**Note: If modifying ```merge.ts```, make sure to recompile before rerunning tests**
```
cd src
tsc merge.ts
```