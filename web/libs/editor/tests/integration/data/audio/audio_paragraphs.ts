export const config = `
<View>
  <Audio name="audio" value="$url" hotkey="space" sync="text" />
  <Header value="Sentiment"/>
  <ParagraphLabels name="label" toName="text">
    <Label value="General: Positive" background="#00ff00"/>
    <Label value="General: Negative" background="#ff0000"/>
    <Label value="Company: Positive" background="#7dff7d"/>
    <Label value="Company: Negative" background="#ff7d7d"/>
    <Label value="External: Positive" background="#4bff4b"/>
    <Label value="External: Negative" background="#ff4b4b"/>
  </ParagraphLabels>
  <View style="height: 400px; overflow-y: auto">
    <Header value="Transcript"/>
    <Paragraphs audioUrl="$url" sync="audio" name="text" value="$text" layout="dialogue" textKey="text" nameKey="author" contextscroll="true" />
  </View>
</View>
`;

export const data = {
  url: "/public/files/barradeen-emotional.mp3",
  text: [
    {
      text: "Dont you hate that?",
      start: 0,
      end: 2,
      author: "Mia Wallace",
    },
    {
      text: "Hate what?",
      author: "Vincent Vega:",
      start: 2,
      duration: 2,
    },
    {
      text: "Uncomfortable silences. Why do we feel its necessary to yak about nonsense in order to be comfortable?",
      author: "Mia Wallace:",
      start: 14,
      end: 16,
    },
    {
      text: "I dont know. Thats a good question.",
      start: 16,
      end: 18,
      author: "Vincent Vega:",
    },
    {
      text: "Thats when you know you found somebody really special. When you can just shut the door closed a minute, and comfortably share silence.",
      author: "Mia Wallace:",
      start: 20,
      end: 60,
    },
  ],
};

export const result = [
  {
    value: {
      start: "0",
      end: "0",
      startOffset: 0,
      endOffset: 4,
      text: "Dont",
      paragraphlabels: ["General: Negative"],
    },
    id: "RcHv5CdYBt",
    from_name: "label",
    to_name: "text",
    type: "paragraphlabels",
    origin: "manual",
  },
  {
    value: {
      start: "0",
      end: "0",
      startOffset: 9,
      endOffset: 13,
      text: "hate",
      paragraphlabels: ["General: Positive"],
    },
    id: "eePG7PVYH7",
    from_name: "label",
    to_name: "text",
    type: "paragraphlabels",
    origin: "manual",
  },
  {
    value: {
      start: "2",
      end: "2",
      startOffset: 20,
      endOffset: 72,
      text: "es. Why do we feel its necessary to yak about nonsen",
      paragraphlabels: ["External: Positive"],
    },
    id: "-GrFBNGB9G",
    from_name: "label",
    to_name: "text",
    type: "paragraphlabels",
    origin: "manual",
  },
  {
    value: {
      start: "3",
      end: "3",
      startOffset: 7,
      endOffset: 14,
      text: "know. T",
      paragraphlabels: ["Company: Positive"],
    },
    id: "llFGFq3jFt",
    from_name: "label",
    to_name: "text",
    type: "paragraphlabels",
    origin: "manual",
  },
];
