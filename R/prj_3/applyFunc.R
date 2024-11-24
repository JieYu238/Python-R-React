apply(X=LungCapData, MARGIN = 2, FUN=mean)

rm(LungCapData)

StockData <- read.table(file.choose(), header = T, sep = ",")

apply(X=StockData, MARGIN = 2, FUN = mean)

apply(X=StockData, MARGIN = 2, FUN = mean, na.rm=TRUE)

rm(StockData)

StockData <- read.table(file.choose(), header = T, row.names = 1, sep = ",")

apply(X=StockData, MARGIN = 2, FUN=mean)

apply(X=StockData, MARGIN = 2, FUN=mean, na.rm=T)

StockData <- read.table(file.choose(), header = T, row.names = 1, sep = "\t")

apply(X=StockData, MARGIN = 2, FUN=mean)

apply(X=StockData, MARGIN = 2, FUN=mean, na.rm=T)

AVG <- apply(X=StockData, MARGIN = 2, FUN=mean, na.rm=T)

AVG

apply(StockData, 2, mean, na.rm=T)

colMeans(StockData, na.rm = T)

apply(StockData, 2, max, na.rm=T)

apply(StockData, 2, FUN = quantile, probs=c(0.2, .80), na.rm=T)


apply(StockData, 2, FUN = plot, type="l")

#send the plot function more arguments, such as title, axes labels, and so forth
apply(StockData, 2, FUN=plot, type="l", main="stock", ylab="Price", xlab="Day")

#MARGIN = 1, apply the function to row-wise
apply(StockData, 1, FUN = sum, na.rm=T)

#rowSums, DO SAME
rowSums(StockData, na.rm = T)

#make a nice plot of these
plot(apply(StockData, 1, FUN = sum, na.rm=T), type="l", ylab="Total Market Value", xlab="Day", main="Market Trend")

#add in some nice colored points..
points(apply(StockData, 1, FUN=sum, na.rm=T), pch=16, col="blue")
