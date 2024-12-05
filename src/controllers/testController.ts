// test Controler
import asynchandler from "express-async-handler";

// import { TestService } from "../services/testService";




const getAllTests = asynchandler(async (_req, __res) => {
    // const tests = await TestService.getTests();
    // res.status(201).json(tests);
});

const getOneTest = asynchandler(async (__req, __res) => {
    // const testId = req.params.id;
    // const test = await TestService.getTestById(testId);
    // res.status(201).json(test);
});
const createTest = asynchandler(async (__req, __res) => {

    // const { title} = req.body;

    // console.log("x");
    // console.log(x++);
    // const newTestData: ITest = {
    //     title,
    //     author,
    //     description,
    //     image,
    //     language,
    //     pages,
    //     rating
    // };

    // const validationErrors = validator(TestSchema, newTestData);

    // if (validationErrors) {
    //     res.status(400).json({ errors: validationErrors });
    //     return;
    // }
    // // Sanitize the data from extra spaces in th front and the end and between each carracter
    // const SanitizedData = sanitizer(newTestData);

    // const newTest = await TestService.createNewTest(SanitizedData);

    // res.status(201).json({ message: "Test created successfully.", newTest });
});

const updateTest = asynchandler(async (_req, _res) => {
    // const testId = req.params.id;

    // const { title, author, description, image, language, pages, rating } =
    //     req.body;

    // const updatedTestData: ITest = {
    //     title,
    //     author,
    //     description,
    //     image,
    //     language,
    //     pages,
    //     rating
    // };

    // const validationErrors = validator(TestSchema, updatedTestData);

    // if (validationErrors) {
    //     res.status(400).json({ errors: validationErrors });
    //     return;
    // }

    // // Sanitize the data from extra spaces in th front and the end and between each carracter
    // const SanitizedData = sanitizer(updatedTestData);

    // const updatedTest = await TestService.updateTestById(testId, SanitizedData);

    // res.status(200).json(updatedTest);
});

const deleteTest = asynchandler(async (_req, _res) => {
    // const testId = req.params.id;
    // await TestService.deleteTestById(testId);
    // res.status(200).json({ message: "Test deleted successfully." });
});

export { getAllTests, getOneTest, createTest, updateTest, deleteTest };