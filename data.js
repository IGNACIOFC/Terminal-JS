localStorage.setItem(
  "arr",
  JSON.stringify([
    { name: "Writing.doc", content: "hjhkj" },
    ["user", [
        {name: "Work1.doc", content: "Ex 1"},
        {name: "Work2.doc", content: "Ex 2"}
    ]],
    ["desktop",[
        ["projects", []],
        ["assembler", []],
        [
          "documents",
          [
            { name: "Homework.doc", content: "Ex 1" },
            { name: "Practial.js", content: "3+2" },
            ["pills", [{ name: "Practial.js", content: "3+2" }, ["Homework", []]]],
          ],
        ],
        { name: "Writing.doc", content: "hjhkj" },
      ],
    ],
    ["downloads", []],
  ])
);
