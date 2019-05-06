def ddd():
  x = list(range(10))
  for v in x:
    for m in x:
      n = v*m
      print('%s * %s = %s' %(v,m,n))
ddd()