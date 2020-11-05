# Corpus
from nltk.corpus import names
print(names.words()[:10]) # print first 10 names in the corpus
print(len(names.words())) # print number of words in the corpus

# Tokenization
from nltk.tokenize import word_tokenize
sent = '''I am reading a book.
          It is Python Machine Learning By Example,
          2nd edition.'''
print(word_tokenize(sent)) # prints a unigram tokenized list
sent2 = 'I have been to U.K. and U.S.A'
print(word_tokenize(sent2)) # the function is pretty 5Head
# Using spaCy for similar results
import spacy
nlp = spacy.load('en_core_web_sm') # loads tokenization model as variable
tokens2 = nlp(sent2) # applies model to text
print([token.text for token in tokens2]) # prints stuff as objective for loop
# Sentence tokenization using nltk
from nltk.tokenize import sent_tokenize
print(sent_tokenize(sent)) # prints sentence-tokenized list