LungCapData <- read.table(file.choose(), header = T, sep="\t"
                          )
attach(LungCapData)

getwd()

load("FirstProject.Rdata")

class(Gender)

Gender <- as.factor(Gender)

class(Gender)
levels(Gender)

rm(Gender)

LungCapData$Gender <- as.factor(LungCapData$Gender)

class(Gender)

attach(LungCapData)
str(LungCapData)

head(LungCapData)

levels(Gender)

class(Gender)

mean(Age)

LungCapData[1:5]

LungCapData[1:5,]
