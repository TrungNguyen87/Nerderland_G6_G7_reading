/* =====================================================================
   Alle vaste teksten van de interface, in Nederlands en Engels.
   De verhalen zelf hebben hun eigen nl/en velden in data/.
   ===================================================================== */
const I18N = {
  tagline:        { nl: 'Word beter in lezen. Eén verhaal per keer.', en: 'Get better at reading. One story at a time.' },
  yourName:       { nl: 'Hoe heet je?',            en: 'What is your name?' },
  chooseAvatar:   { nl: 'Kies je held',            en: 'Choose your hero' },
  startBtn:       { nl: 'Start het avontuur 🚀',   en: 'Start the adventure 🚀' },
  continueBtn:    { nl: 'Verder spelen 🚀',        en: 'Keep playing 🚀' },
  privacyNote:    { nl: 'Alles blijft op dit apparaat. Er wordt niets verstuurd.',
                    en: 'Everything stays on this device. Nothing is sent anywhere.' },
  chooseWorld:    { nl: 'Kies een wereld',         en: 'Choose a world' },
  chooseWorldSub: { nl: 'Waar wil je vandaag over lezen?', en: 'What do you want to read about today?' },
  chooseLevel:    { nl: 'Kies hoe moeilijk je het wilt.',  en: 'Choose how hard you want it.' },
  back:           { nl: 'Terug',                   en: 'Back' },
  backToGame:     { nl: 'Terug naar het spel',     en: 'Back to the game' },
  readAloud:      { nl: 'Voorlezen',               en: 'Read aloud' },
  stopAloud:      { nl: 'Stop',                    en: 'Stop' },
  followAlong:    { nl: 'Meelezen',                en: 'Follow along' },
  textSize:       { nl: 'Groter',                  en: 'Bigger' },
  ruler:          { nl: 'Liniaal',                 en: 'Ruler' },
  easyFont:       { nl: 'Leeshulp',                en: 'Easy font' },
  doneReading:    { nl: 'Ik heb het gelezen ✅',   en: 'I have read it ✅' },
  peek:           { nl: 'Tekst',                   en: 'Text' },
  hint:           { nl: '💡 Hint',                 en: '💡 Hint' },
  check:          { nl: 'Controleer',              en: 'Check' },
  next:           { nl: 'Verder →',                en: 'Next →' },
  finishStory:    { nl: 'Klaar! →',                en: 'Finish! →' },
  correctLabel:   { nl: 'goed',                    en: 'correct' },
  wpmLabel:       { nl: 'woorden/min',             en: 'words/min' },
  timeLabel:      { nl: 'tijd',                    en: 'time' },
  tryAgain:       { nl: '🔁 Nog eens',             en: '🔁 Retry' },
  bonusRound:     { nl: '⚡ Bonusronde',           en: '⚡ Bonus round' },
  keepGoing:      { nl: 'Volgend verhaal →',       en: 'Next story →' },
  flashTitle:     { nl: '⚡ Flitswoorden',          en: '⚡ Flash words' },
  flashSub:       { nl: 'Het woord flitst heel kort. Welk woord was het?',
                    en: 'The word flashes very briefly. Which word was it?' },
  stopGame:       { nl: 'Stoppen',                 en: 'Stop' },
  parentTitle:    { nl: '📊 Voor ouders',          en: '📊 For parents' },
  gateAsk:        { nl: 'Kleine som om te bewijzen dat je een volwassene bent:',
                    en: 'A small sum to prove you are a grown-up:' },
  gateBtn:        { nl: 'Open',                    en: 'Open' },
  gateWrong:      { nl: 'Bijna! Probeer nog eens.', en: 'Almost! Try again.' },
  pStories:       { nl: 'verhalen',                en: 'stories' },
  pQuestions:     { nl: 'vragen',                  en: 'questions' },
  pAcc:           { nl: 'goed',                    en: 'correct' },
  pTime:          { nl: 'leestijd',                en: 'reading time' },
  pWpm:           { nl: 'wrd/min',                 en: 'wrd/min' },
  pDays:          { nl: 'dagen',                   en: 'days' },
  pBySkill:       { nl: 'Per leesvaardigheid',     en: 'By reading skill' },
  pByTopic:       { nl: 'Per onderwerp en niveau', en: 'By topic and level' },
  pAdvice:        { nl: 'Wat kun je thuis oefenen?', en: 'What to practise at home' },
  pRecent:        { nl: 'Laatste antwoorden',      en: 'Latest answers' },
  pDownload:      { nl: 'Rapport downloaden',      en: 'Download report' },
  pReport:        { nl: 'Rapport',                 en: 'Report' },
  pDownloadNote:  { nl: 'Het logboek blijft bewaard op dit apparaat tot je het wist.',
                    en: 'The log stays on this device until you erase it.' },
  pWipe:          { nl: '🗑 Wis alles',            en: '🗑 Erase all' },
  wipeConfirm:    { nl: 'Weet je het zeker? Alle voortgang en logboeken worden gewist.',
                    en: 'Are you sure? All progress and logs will be erased.' },

  /* ---- de twee spelmodes ---- */
  modeRead:       { nl: '📖 Lezen',                en: '📖 Reading' },
  modeSpell:      { nl: '✍️ Spelling',             en: '✍️ Spelling' },
  chooseSpell:    { nl: 'Kies een spellingregel',  en: 'Choose a spelling rule' },
  chooseSpellSub: { nl: 'Welke regel wil je vandaag oefenen?',
                    en: 'Which rule do you want to practise today?' },
  chooseSet:      { nl: 'Kies een oefening.',      en: 'Pick an exercise.' },
  spellSets:      { nl: 'oefeningen',              en: 'exercises' },
  spellWords:     { nl: 'woorden',                 en: 'words' },
  spellRule:      { nl: 'De regel',                en: 'The rule' },
  spellListen:    { nl: '🔊 Luister nog eens',     en: '🔊 Listen again' },
  spellTypeHint:  { nl: 'Luister goed en typ het woord.',
                    en: 'Listen carefully and type the word.' },
  spellTypeLabel: { nl: 'Typ het woord:',          en: 'Type the word:' },
  spellFillHint:  { nl: 'Welk stukje hoort er in het woord?',
                    en: 'Which piece belongs in the word?' },
  spellPickHint:  { nl: 'Welk woord is goed geschreven?',
                    en: 'Which word is spelled correctly?' },
  spellErrorHint: { nl: 'Klik op het woord dat fout geschreven is.',
                    en: 'Click the word that is spelled wrongly.' },
  spellSortHint:  { nl: 'Zet elk woord in de goede groep.',
                    en: 'Put every word in the right group.' },
  spellNoSpeech:  { nl: 'Dit apparaat kan niet voorlezen. Het woord staat hieronder.',
                    en: 'This device cannot read aloud. The word is shown below.' },
  spellBack:      { nl: 'Terug naar de regels',    en: 'Back to the rules' },
  spellAgain:     { nl: '🔁 Nog eens oefenen',     en: '🔁 Practise again' },
  spellNextSet:   { nl: 'Volgende oefening →',     en: 'Next exercise →' },
  spellWordList:  { nl: 'Woorden om samen na te kijken',
                    en: 'Words to go over together' },
  spellAllDone:   { nl: 'Je hebt alle oefeningen van deze regel gedaan! Kies een andere regel.',
                    en: 'You have done every exercise for this rule! Pick another rule.' },
  spellLocked:    { nl: 'Maak eerst de vorige oefening.',
                    en: 'Finish the previous exercise first.' },
  typeFirst:      { nl: 'Typ eerst een woord.',    en: 'Type a word first.' },
  spellRightWord: { nl: 'Het goede woord is:',     en: 'The right word is:' },
  multiHint:      { nl: 'Let op: er zijn {n} antwoorden goed.',
                    en: 'Careful: {n} answers are correct.' },
  sortHint:       { nl: 'Kies bij elke zin de goede groep.',
                    en: 'Choose the right group for every sentence.' },
  questionsShort: { nl: 'vragen',                  en: 'questions' },
  pSpellTitle:    { nl: 'Spelling per regel',      en: 'Spelling by rule' },
  pSpellWords:    { nl: 'spellingwoorden',         en: 'spelling words' },
  pSpellAcc:      { nl: 'spelling goed',           en: 'spelling correct' },
  pSpellMistakes: { nl: 'Fout gespelde woorden',   en: 'Misspelled words' },
  pNoSpell:       { nl: 'Er is nog geen spelling geoefend.',
                    en: 'No spelling practised yet.' },

  /* korte reacties van de uil */
  praise: { nl: ['Top!','Goed gezien!','Precies!','Knap hoor!','Helemaal goed!','Je bent op dreef!','Scherp!'],
            en: ['Nice!','Well spotted!','Exactly!','Clever!','Spot on!','You are on a roll!','Sharp!'] },
  comfort:{ nl: ['Bijna!','Dat was lastig.','Geeft niks, kijk mee.','Volgende keer!','Goed geprobeerd.'],
            en: ['Almost!','That one was tricky.','No worries, look with me.','Next time!','Good try.'] },
  greet:  { nl: 'Ik ben Oscar. Ik help je met de vragen!', en: 'I am Oscar. I will help you with the questions!' },

  correct:        { nl: 'Goed!',                   en: 'Correct!' },
  wrong:          { nl: 'Net niet.',               en: 'Not quite.' },
  trueLabel:      { nl: 'WAAR',                    en: 'TRUE' },
  falseLabel:     { nl: 'NIET WAAR',               en: 'FALSE' },
  orderHint:      { nl: 'Klik de zinnen aan in de goede volgorde.', en: 'Click the sentences in the right order.' },
  orderUndo:      { nl: 'Klik een zin hierboven weg om te wisselen.', en: 'Click a sentence above to remove it.' },
  matchHint:      { nl: 'Klik links een woord en rechts de betekenis.', en: 'Click a word on the left and its meaning on the right.' },
  chooseFirst:    { nl: 'Kies eerst een antwoord.', en: 'Pick an answer first.' },
  levelUp:        { nl: 'Level omhoog!',           en: 'Level up!' },
  missionDone:    { nl: '🏆 Missie geslaagd: 30 minuten gelezen!', en: '🏆 Mission complete: 30 minutes of reading!' },
  storyLocked:    { nl: 'Lees eerst het vorige niveau uit.', en: 'Finish the previous level first.' },
  allDone:        { nl: 'Je hebt alle verhalen van deze wereld gedaan! Kies een andere wereld.',
                    en: 'You have done every story in this world! Pick another world.' },
  bestScore:      { nl: 'Beste',                   en: 'Best' },
  notYet:         { nl: 'nog niet gedaan',         en: 'not done yet' },
  words:          { nl: 'woorden',                 en: 'words' },
  question:       { nl: 'Vraag',                   en: 'Question' },
  of:             { nl: 'van',                     en: 'of' },

  /* resultaat-titels per sterrenaantal */
  res3: { nl: 'Kampioen! ⭐⭐⭐',  en: 'Champion! ⭐⭐⭐' },
  res2: { nl: 'Goed gedaan! ⭐⭐', en: 'Well done! ⭐⭐' },
  res1: { nl: 'Je hebt het gehaald ⭐', en: 'You made it ⭐' },
  res0: { nl: 'Volgende keer beter!', en: 'Better luck next time!' },
  res3sub:{ nl: 'Alles goed. Je hebt de tekst echt begrepen.', en: 'All correct. You really understood the text.' },
  res2sub:{ nl: 'Bijna alles goed. Kijk nog even naar de fouten.', en: 'Almost all correct. Have a look at the mistakes.' },
  res1sub:{ nl: 'Je hebt het gehaald. Lees de uitleg nog eens rustig door.', en: 'You made it. Read the explanations again calmly.' },
  res0sub:{ nl: 'Deze tekst was lastig. Probeer hem nog eens, of kies een makkelijker niveau.',
            en: 'This text was hard. Try it again, or pick an easier level.' }
};

/* Badges: id, emoji, naam en uitleg in beide talen */
const BADGES = [
  { id: 'first',    emoji: '🌱', nl: 'Eerste verhaal',   en: 'First story',      dNl: 'Je eerste verhaal uitgelezen', dEn: 'Finished your first story' },
  { id: 'perfect',  emoji: '💎', nl: 'Foutloos',         en: 'Flawless',         dNl: 'Alle vragen van een verhaal goed', dEn: 'All questions of a story correct' },
  { id: 'streak5',  emoji: '🔥', nl: 'Vijf op een rij',  en: 'Five in a row',    dNl: '5 goede antwoorden achter elkaar', dEn: '5 correct answers in a row' },
  { id: 'streak10', emoji: '🚀', nl: 'Tien op een rij',  en: 'Ten in a row',     dNl: '10 goede antwoorden achter elkaar', dEn: '10 correct answers in a row' },
  { id: 'explorer', emoji: '🧭', nl: 'Wereldreiziger',   en: 'Explorer',         dNl: 'In elke wereld een verhaal gelezen', dEn: 'Read a story in every world' },
  { id: 'g7',       emoji: '🏔️', nl: 'Groep 7 niveau',   en: 'Group 7 level',    dNl: 'Een moeilijk verhaal (niveau 3) gehaald', dEn: 'Completed a level 3 story' },
  { id: 'mission',  emoji: '🏆', nl: '30 minuten',       en: '30 minutes',       dNl: 'Een half uur gelezen op één dag', dEn: 'Read for half an hour in one day' },
  { id: 'wordking', emoji: '📖', nl: 'Woordenkoning',    en: 'Word king',        dNl: '10 woordenschatvragen goed', dEn: '10 vocabulary questions correct' },
  { id: 'fast',     emoji: '⚡', nl: 'Vlotte lezer',     en: 'Fluent reader',    dNl: 'Meer dan 120 woorden per minuut', dEn: 'More than 120 words per minute' },
  { id: 'ten',      emoji: '📚', nl: 'Tien verhalen',    en: 'Ten stories',      dNl: '10 verhalen uitgelezen', dEn: 'Finished 10 stories' },
  { id: 'e7',       emoji: '🎓', nl: 'AVI E7',           en: 'AVI E7',           dNl: 'Een Expert-tekst (niveau 4) gehaald', dEn: 'Completed an Expert text (level 4)' },
  { id: 'cito',     emoji: '🧩', nl: 'Cito-meester',     en: 'Cito master',      dNl: 'Twee sterren of meer op niveau 5', dEn: 'Two stars or more on level 5' },
  { id: 'speller',  emoji: '✍️', nl: 'Spellingstarter',  en: 'Spelling starter', dNl: 'Je eerste spellingoefening gedaan', dEn: 'Finished your first spelling exercise' },
  { id: 'spell50',  emoji: '🅰️', nl: 'Vijftig woorden',  en: 'Fifty words',      dNl: '50 woorden goed gespeld', dEn: '50 words spelled correctly' },
  { id: 'dictee',   emoji: '💯', nl: 'Foutloos dictee',  en: 'Flawless dictation', dNl: 'Een spellingoefening zonder fouten', dEn: 'A spelling exercise without mistakes' },
  { id: 'ruler',    emoji: '📐', nl: 'Regelkenner',      en: 'Rule expert',      dNl: 'Vijf spellingregels geoefend', dEn: 'Practised five spelling rules' }
];

const AVATARS = ['🦸','🦹','🧙','🥷','🦊','🐯','🐼','🐸','🦉','🐙','🤖','👽','🦖','🦄','🐝','🐢'];

/* t('key') geeft de tekst in de huidige taal */
function t(key) {
  const e = I18N[key];
  if (!e) return key;
  return e[window.LANG || 'nl'];
}
/* willekeurige zin uit een lijst */
function tRandom(key) {
  const list = I18N[key][window.LANG || 'nl'];
  return list[Math.floor(Math.random() * list.length)];
}
/* pak nl/en veld uit een data-object */
function L(obj) {
  if (obj === null || obj === undefined) return '';
  if (typeof obj === 'string') return obj;
  return obj[window.LANG || 'nl'] !== undefined ? obj[window.LANG || 'nl'] : (obj.nl || '');
}
