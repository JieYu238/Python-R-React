data <- data.frame(
  Subject = c("Math", "Science", "English", "History", "Art", "Physical", "Physics", "Biology"),
  Age = c(16, 17, 15, 16, 17, 16, 17, 15),
  Gender = c("M","M","F","M","M","F","M","F" ),
  Score = c(87, 89, 98, 78, 56, 90, 87, 99)
)

print(data)

#allow to use tab-delim, comma-delim, space-delim to export txt, csv, 
write.table(data, file="DataToExport.csv", row.names=F,sep=",")

write.table(data, file="DataToExportTxt.txt", row.names = F, sep="\t")

write.table(data, file="DataToExportSpace", row.names = F, sep=" ")
