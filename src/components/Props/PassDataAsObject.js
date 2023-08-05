import React from 'react';

const PassDataAsObject = ({ objData }) => {
	// console.log('Ami object Data :: ', objData);

	const skillNames = Object.keys(objData);

	// console.log('keys',Object.keys(objData));
	return (
		<div>
			<h3>Skills List </h3>

			<dl>
				{skillNames.map((skillName) => (
					<div key={skillName}>
						<dt>{skillName}</dt>
						{skillName === 'academic' &&
							objData.academic.map((academicSkill,index) => <dd key={index}>{academicSkill}</dd>)}

						{skillName === 'technical' &&
							objData.technical.map((technicalSkill,index) => (
								<dd key={index}>{technicalSkill}</dd>
							))}

						{skillName === 'other' && (
							<>
								<dd>{objData.other.play}</dd>
								<dd>{objData.other.entertainment}</dd>
							</>
						)}
					</div>
				))}
			</dl>
		</div>
	);
};

export default PassDataAsObject;
