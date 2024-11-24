library(readxl)
LungCapData2 <- read_excel("prj_1/data.xlsx", 
                          sheet = "dataCSV", col_types = c("numeric", 
                                                           "skip", "numeric", "text", "text", 
                                                           "text"))
View(LungCapData2)
