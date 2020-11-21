# import the loader function for the 20 newsgroups
from sklearn.datasets import fetch_20newsgroups
groups = fetch_20newsgroups() # downloads the dataset into groups
groups.keys() # returns the keys: 'data', 'filenames', 'target_names', 'target', 'DESCR'
groups['target_names'] # returns the newsgroup names (eg: 'alt.atheism', 'comp.graphics', etc.)
groups.target # returns the newsgroup encoded as an integer
# use numpy to figure out the distinct values for integers
import numpy as np
np.unique(groups.target) # lists out the unique values for newsgroup

# displaying the distribution of classes
import seaborn as sns # used to compute the histogram of categories
sns.distplot(groups.target)
import matplotlib.pyplot as plt
plt.show()
