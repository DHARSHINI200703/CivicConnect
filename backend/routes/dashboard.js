const router=require('express').Router(); const Issue=require('../models/Issue');
router.get('/stats',async(req,res)=>{const a=await Issue.find();res.json({total:a.length,pending:a.filter(x=>['Reported','Assigned'].includes(x.status)).length,inProgress:a.filter(x=>x.status==='In Progress').length,resolved:a.filter(x=>['Resolved','Citizen Verified'].includes(x.status)).length,breached:a.filter(x=>x.slaStatus==='Breached').length,verified:a.filter(x=>x.status==='Citizen Verified').length})});
module.exports=router;
