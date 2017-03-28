commandArray = {}
 
-- function to get information from receiver
function onkyo_status(command)
  local result = {}
  local output = io.popen ('onkyo '..command)
  for line in output:lines() do
    table.insert(result, line)
  end  
  output:close()
  return result
end
 
-- function to change settings receiver
function onkyo_change(command)
  os.execute('/bin/onkyo '..command)
end
 
 
-- turn the receiver on/off with dummy switch 'Versterker' 
if devicechanged['Versterker']=="On" then
  onkyo_change('system-power:on')
else
  if devicechanged['Versterker']=="Off" then
    onkyo_change('system-power:standby')
  end
end

-- Set Onkyo to radio input FM
if devicechanged['Versterker']=="On" then
  onkyo_change('SLI24')
else
  if devicechanged['Versterker']=="Off" then
    onkyo_change('system-power:standby')
  end
end

-- Change FM radio channel up
if devicechanged['FM Channel up']=="On" then
  onkyo_change('PRSUP')
 end

-- Change FM radio channel down
if devicechanged['FM Channel down']=="Off" then
  onkyo_change('PRSDOWN')
end

-- Change Volume up
if devicechanged['Volume up']=="On" then
  onkyo_change('MVLUP')
end

-- Change Volume down
if devicechanged['Volume down']=="Off" then
  onkyo_change('MVLDOWN')
end

-- get status information
if devicechanged['Versterker']=="On" then
  status = onkyo_status('system-power:query')
  print(status[2])
else
  if devicechanged['Versterker']=="Off" then
    status = onkyo_status('system-power:query')
    print(status[2])
  end
end

 
return commandArray