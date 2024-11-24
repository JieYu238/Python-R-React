#using tAPPLY FUNC IN R
LungCapData <- read.table(file.choose(), header = T, sep="\t")

summary(LungCapData)

attach(LungCapData)

Gender <- as.factor(Gender)
rm(Gender)

LungCapData$Gender <- as.factor(LungCapData$Gender)

class(Gender)

levels(Gender)

class(LungCapData$Gender)

summary(LungCapData)

levels(LungCapData$Gender)

?tApply
tapply

attach(LungCapData)

#calculate the mean Age for Smoker /NonSmoker
tapply(X=Age, INDEX=Smoke, FUN=mean, na.rm=T)

#no need to include 'X' , "INDEX", "FUN"
tapply(Age, Smoke, mean, na.rm=T)

m <- tapply(Age, Smoke, mean, na.rm=T)
m

#simplify is TRUE by default
tapply(Age, Smoke, mean, na.rm=T, simplify = F)


mean(Age[Smoke=="no"], na.rm = T)
mean(Age[Smoke=="yes"])


#applying the "summary" function to groups
tapply(Age, Smoke, summary, na.rm=T)

#applying the "quantile" functiion to groups
tapply(Age, Smoke, quantile, probs=c(0.2, 0.8), na.rm=T)

#"subset" based on multiple variables/vectors
#calculate the mean Age for Smoker/Non-smoker and male/female
tapply(X=Age, INDEX=list(Smoke, Gender), FUN=mean, na.rm=T)

#a less efficient way to get this done...
mean(Age[Smoke=="no"&Gender=="male"], na.rm=T)
mean(Age[Smoke=="no"&Gender=="female"], na.rm=T)
mean(Age[Smoke=="yes"&Gender=="male"], na.rm=T)
mean(Age[Smoke=="yes"&Gender=="female"], na.rm=T)

#"by" function in R does the same as "tapply" in R except that it returns results in vector format

by(Age, list(Smoke, Gender), mean, na.rm=T)

#subset the elements in the usual way
temp <- by(Age, list(Smoke, Gender), mean, na.rm=T)
temp
temp[4]

#see the "class" of the temp
class(temp)

#convert it to a vector
c(temp)
temp2 <- c(temp)

#check the class
class(temp2)
