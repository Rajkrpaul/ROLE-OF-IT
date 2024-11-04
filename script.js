document.addEventListener('DOMContentLoaded', () => {
    // Animate statistics
    const statistics = document.querySelectorAll('.statistic');
    statistics.forEach(statistic => {
        const value = statistic.querySelector('.value');
        const targetValue = parseInt(statistic.dataset.value);
        animateValue(value, 0, targetValue, 2000);
    });

    // Create flowchart
    const ctx = document.getElementById('impactChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Energy Conservation', 'Green Energy', 'Renewable Energy'],
            datasets: [{
                label: 'IT Impact (%)',
                data: [75, 85, 90],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtn = document.getElementById('more-info-btn');
    const moreInfoContent = document.getElementById('more-info-content');

    const content = `
        <div class="section">
            <h3>1. Introduction to Energy Conservation</h3>
            <p>Definition and importance of energy conservation.</p>
            <p>Benefits to the environment, economy, and society.</p>
            <p>Impact on climate change and carbon emissions.</p>
        </div>

        <div class="section">
            <h3>2. Energy Consumption Statistics</h3>
            <p>Global energy consumption trends.</p>
            <p>Breakdown of energy consumption by sector (residential, industrial, transportation).</p>
            <p>Top energy-consuming countries (China, USA, India, etc.).</p>
            <p>Global primary energy sources (oil, natural gas, coal, renewables).</p>
            <p>Share of energy from renewable sources (e.g., ~29% of global electricity production in 2022).</p>
        </div>

        <div class="section">
            <h3>3. Environmental Impact of Energy Use</h3>
            <p>Carbon emissions from energy use (~75% of global greenhouse gas emissions come from energy-related activities).</p>
            <p>Impact of fossil fuels on air quality and public health.</p>
            <p>Energy production's impact on natural habitats, ecosystems, and biodiversity.</p>
        </div>

        <div class="section">
            <h3>4. Types of Energy</h3>
            <h4>Non-renewable sources:</h4>
            <p>Coal, oil, natural gas, nuclear energy.</p>
            <p>Stats: Fossil fuels still account for ~80% of global energy supply.</p>

            <h4>Renewable sources:</h4>
            <p>Solar, wind, hydro, biomass, geothermal.</p>
            <p>Stats: Renewables are the fastest-growing energy sources; solar and wind grew by over 20% annually in recent years.</p>
            <p>Transition towards green energy (e.g., global solar capacity surpassed 1 TW in 2023).</p>
        </div>

        <div class="section">
            <h3>5. Energy Conservation Methods</h3>
            <h4>In Homes and Buildings:</h4>
            <ul>
                <li>Efficient lighting (LEDs use 75% less energy).</li>
                <li>Energy-efficient appliances (ENERGY STAR appliances save up to 50% on energy bills).</li>
                <li>Insulation and weatherization.</li>
                <li>Smart thermostats (can save 10-15% on heating and cooling).</li>
            </ul>

            <h4>In Transportation:</h4>
            <ul>
                <li>Promoting electric vehicles (EVs) and hybrid cars (EVs emit ~60% less CO2 compared to gasoline-powered cars).</li>
                <li>Carpooling and public transportation.</li>
                <li>Fuel-efficient driving practices.</li>
            </ul>

            <h4>In Industry:</h4>
            <ul>
                <li>Energy-efficient machinery and processes.</li>
                <li>Recycling and waste heat recovery.</li>
                <li>Optimizing supply chain logistics to reduce energy consumption.</li>
            </ul>
        </div>

        <div class="section">
            <h3>6. Government Policies and Incentives</h3>
            <p>International climate agreements (Paris Agreement aims to limit global warming to below 2°C).</p>
            <p>National and local energy efficiency programs (e.g., tax incentives for solar panels, EV rebates).</p>
            <p>Energy efficiency standards (e.g., minimum performance standards for appliances).</p>
        </div>

        <div class="section">
            <h3>7. Future of Energy Conservation</h3>
            <p>Innovations in renewable energy technology (next-gen solar panels, battery storage advancements).</p>
            <p>Growth of smart grids and energy-efficient infrastructure.</p>
            <p>Role of artificial intelligence (AI) and the Internet of Things (IoT) in optimizing energy use.</p>
            <p>Projected global energy needs by 2050 and the importance of sustainable growth.</p>
        </div>

        <div class="section">
            <h3>8. Case Studies of Successful Energy Conservation Efforts</h3>
            <p>Cities or countries leading in renewable energy use (e.g., Costa Rica runs on 98% renewable energy).</p>
            <p>Corporate sustainability programs (e.g., tech companies reaching carbon neutrality).</p>
            <p>Community-based energy-saving initiatives.</p>
        </div>

        <div class="section">
            <h3>9. Behavioral and Cultural Shifts</h3>
            <p>How consumer choices impact energy consumption (switching to eco-friendly products, reducing energy waste).</p>
            <p>Social and psychological aspects of adopting energy-saving habits.</p>
        </div>

        <div class="section">
            <h3>10. Energy Conservation Tools and Resources</h3>
            <p>Online calculators for estimating energy savings.</p>
            <p>Apps for tracking personal or business energy consumption.</p>
            <p>Guides on conducting energy audits at home and in businesses.</p>
        </div>

        <div class="section">
            <h3>Key Statistics</h3>
            <ul>
                <li>Global energy demand is projected to increase by 50% by 2050.</li>
                <li>Energy-efficient practices can reduce energy bills by 20-30%.</li>
                <li>Buildings are responsible for 40% of global energy consumption.</li>
                <li>By switching to 100% renewable energy, the world could save $12 trillion by 2050 (according to a Stanford University study).</li>
                <li>Every 1°C increase in thermostat settings during summer can save 10% on energy use.</li>
                <li>EV sales surpassed 10 million units in 2022, with a growth rate of over 50% year-on-year.</li>
            </ul>
        </div>
    `;

    moreInfoContent.innerHTML = content;

    moreInfoBtn.addEventListener('click', function() {
        moreInfoBtn.classList.toggle('open');
        moreInfoContent.classList.toggle('hidden');
        moreInfoContent.classList.toggle('show');

        if (moreInfoContent.classList.contains('show')) {
            moreInfoBtn.textContent = 'Hide Energy Conservation Information';
        } else {
            moreInfoBtn.textContent = 'Learn More About Energy Conservation';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const greenEnergyInfoBtn = document.getElementById('green-energy-info-btn');
    const greenEnergyInfoContent = document.getElementById('green-energy-info-content');

    const content = `
        <div class="section">
            <h3>1. Introduction to Green Energy</h3>
            <p>Green energy refers to energy produced from natural sources like sunlight, wind, water, and biomass, with minimal environmental impact.</p>
            <p>Importance of transitioning to green energy to combat climate change, reduce carbon footprints, and ensure a sustainable future.</p>
        </div>

        <div class="section">
            <h3>2. Types of Green Energy</h3>
            <h4>Solar Energy:</h4>
            <ul>
                <li>How solar panels convert sunlight into electricity.</li>
                <li>Growth of solar power: Global solar capacity reached over 1 TW in 2023.</li>
                <li>Cost reduction: The cost of solar PV has decreased by more than 80% over the past decade.</li>
                <li>Key statistics: Solar power contributed about 4% to global electricity generation in 2022.</li>
            </ul>
            <h4>Wind Energy:</h4>
            <ul>
                <li>Wind turbines harnessing kinetic energy from wind.</li>
                <li>Global growth: Wind energy provided 7% of the world's electricity in 2022.</li>
                <li>Leading countries in wind energy: China, USA, Germany, and India.</li>
                <li>Offshore vs. onshore wind developments.</li>
            </ul>
            <h4>Hydropower:</h4>
            <ul>
                <li>Use of water flow to generate electricity.</li>
                <li>Hydropower accounts for 16% of global electricity generation.</li>
                <li>Largest hydropower producers: China, Brazil, and the U.S.</li>
            </ul>
            <h4>Biomass Energy:</h4>
            <ul>
                <li>Organic material used to generate heat and electricity.</li>
                <li>Biomass provides about 10% of the world's energy.</li>
            </ul>
            <h4>Geothermal Energy:</h4>
            <ul>
                <li>Using the Earth's internal heat to produce electricity.</li>
                <li>Countries leading in geothermal energy: Iceland, the U.S., and the Philippines.</li>
            </ul>
        </div>

        <div class="section">
            <h3>3. Benefits of Green Energy</h3>
            <h4>Environmental:</h4>
            <ul>
                <li>Reduction in greenhouse gas emissions: Renewable energy sources emit 0-3% of the carbon emissions of fossil fuels.</li>
                <li>Mitigating air and water pollution.</li>
                <li>Conservation of natural resources and biodiversity protection.</li>
            </ul>
            <h4>Economic:</h4>
            <ul>
                <li>Job creation: The renewable energy sector employed over 12 million people globally in 2022, with solar and wind being the biggest employers.</li>
                <li>Cost efficiency: Wind and solar energy are now cheaper than fossil fuels in many regions.</li>
                <li>Long-term savings for consumers and businesses.</li>
            </ul>
            <h4>Energy Independence:</h4>
            <ul>
                <li>Reducing dependence on imported fuels.</li>
                <li>Stabilizing energy prices by diversifying energy sources.</li>
            </ul>
        </div>

        <div class="section">
            <h3>4. Global Green Energy Adoption</h3>
            <h4>Key Trends:</h4>
            <ul>
                <li>In 2023, renewable energy contributed around 29% to global electricity generation.</li>
                <li>Countries aiming for 100% renewable energy: Costa Rica, Iceland, and Norway already generate nearly all their electricity from renewables.</li>
            </ul>
            <h4>Paris Agreement:</h4>
            <p>197 countries have committed to reducing carbon emissions and boosting renewable energy investments to limit global temperature rise to below 2°C.</p>
            <h4>EU Green Deal:</h4>
            <p>The EU aims for climate neutrality by 2050, with a focus on expanding renewables.</p>
        </div>

        <div class="section">
            <h3>5. Challenges to Green Energy Adoption</h3>
            <h4>Intermittency:</h4>
            <ul>
                <li>Solar and wind energy are weather-dependent, leading to irregular supply.</li>
                <li>Solutions: Battery storage, grid integration, and balancing supply with demand.</li>
            </ul>
            <h4>Energy Storage:</h4>
            <ul>
                <li>Current challenges in storing renewable energy for later use.</li>
                <li>Emerging technologies: Lithium-ion batteries, hydrogen fuel cells, and pumped hydro storage.</li>
            </ul>
            <h4>Infrastructure and Costs:</h4>
            <ul>
                <li>High upfront costs for installation and grid updates.</li>
                <li>Need for modernized grid systems to accommodate distributed energy resources (DERs).</li>
            </ul>
            <h4>Political and Regulatory Challenges:</h4>
            <ul>
                <li>Inconsistent policies and subsidies across regions.</li>
                <li>Need for stronger government incentives and long-term policy commitments.</li>
            </ul>
        </div>

        <div class="section">
            <h3>6. Future of Green Energy</h3>
            <h4>Technological Innovations:</h4>
            <ul>
                <li>Advances in solar photovoltaic efficiency (solar panels converting more sunlight into energy).</li>
                <li>Floating wind farms and offshore wind expansion.</li>
                <li>Energy storage breakthroughs, including next-gen batteries and hydrogen storage solutions.</li>
                <li>Smart grids and IoT (Internet of Things) for optimized energy management.</li>
            </ul>
            <h4>Hydrogen Economy:</h4>
            <ul>
                <li>Green hydrogen as a clean fuel for heavy industries and transportation.</li>
                <li>Projects in Europe, Asia, and the U.S. focusing on hydrogen production from renewable energy.</li>
            </ul>
            <h4>Electric Vehicles (EVs):</h4>
            <ul>
                <li>EV sales are expected to account for over 40% of new car sales globally by 2030.</li>
                <li>Integrating EVs with renewable energy grids for sustainable transportation.</li>
            </ul>
        </div>

        <div class="section">
            <h3>7. Policy and Government Support for Green Energy</h3>
            <h4>Global and National Targets:</h4>
            <ul>
                <li>The U.S. aims to reach 100% clean electricity by 2035.</li>
                <li>India's ambitious target of 500 GW renewable energy capacity by 2030.</li>
                <li>China leading renewable energy investments and aiming for carbon neutrality by 2060.</li>
            </ul>
            <h4>Subsidies and Incentives:</h4>
            <ul>
                <li>Solar tax credits, rebates for EV purchases, and feed-in tariffs for renewable energy generation.</li>
                <li>Policies promoting carbon pricing and carbon trading markets.</li>
            </ul>
        </div>

        <div class="section">
            <h3>8. Impact of Green Energy on Industries</h3>
            <h4>Energy Sector:</h4>
            <ul>
                <li>Transition from fossil fuel-based power plants to renewables.</li>
                <li>Decarbonizing energy-intensive industries like steel, cement, and chemicals.</li>
            </ul>
            <h4>Agriculture:</h4>
            <ul>
                <li>Using solar energy in agriculture (solar water pumps, energy-efficient farming practices).</li>
                <li>Bioenergy from agricultural waste.</li>
            </ul>
            <h4>Corporate Sustainability:</h4>
            <ul>
                <li>Many companies pledging to use 100% renewable energy (e.g., Google, Apple, and Amazon).</li>
                <li>Renewable energy certificates (RECs) and corporate power purchase agreements (PPAs).</li>
            </ul>
        </div>

        <div class="section">
            <h3>9. Community and Residential Green Energy Solutions</h3>
            <h4>Home Solar Installations:</h4>
            <ul>
                <li>Residential solar panel installations have grown by over 40% in the last five years.</li>
                <li>Average cost of residential solar has dropped to $2.75 per watt.</li>
            </ul>
            <h4>Community Solar:</h4>
            <p>Shared solar power systems allowing communities to benefit from green energy.</p>
            <h4>Energy Efficiency at Home:</h4>
            <p>Smart appliances, energy-efficient lighting, and home insulation to reduce energy use.</p>
            <h4>Microgrids and Distributed Generation:</h4>
            <p>Local energy systems using renewable sources for small-scale communities and homes.</p>
        </div>

        <div class="section">
            <h3>10. Green Energy Projects and Case Studies</h3>
            <ul>
                <li>Tesla's Gigafactories producing solar panels and energy storage systems.</li>
                <li>Masdar City in the UAE, a zero-carbon city powered by renewables.</li>
                <li>Germany's Energiewende, a policy for transitioning to renewable energy, leading to over 40% of its electricity from renewables.</li>
            </ul>
        </div>

        <div class="section">
            <h3>Key Statistics</h3>
            <ul>
                <li>Renewables are expected to account for over 90% of the growth in global electricity generation by 2030.</li>
                <li>The global renewable energy market is projected to reach over $1.1 trillion by 2027.</li>
                <li>The cost of wind and solar power has decreased by 70-90% in the past decade.</li>
                <li>Renewable energy prevented the emission of over 7 billion tons of CO2 globally in 2022.</li>
                <li>Wind energy alone avoided 1.5 billion tons of CO2 emissions in 2022.</li>
                <li>Over 30 countries have committed to phasing out coal, including the UK, Canada, and South Korea.</li>
            </ul>
        </div>
    `;

    greenEnergyInfoContent.innerHTML = content;

    greenEnergyInfoBtn.addEventListener('click', function() {
        greenEnergyInfoBtn.classList.toggle('open');
        greenEnergyInfoContent.classList.toggle('hidden');
        greenEnergyInfoContent.classList.toggle('show');

        if (greenEnergyInfoContent.classList.contains('show')) {
            greenEnergyInfoBtn.textContent = 'Hide Green Energy Information';
        } else {
            greenEnergyInfoBtn.textContent = 'Learn More About Green Energy';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const renewableEnergyInfoBtn = document.getElementById('renewable-energy-info-btn');
    const renewableEnergyInfoContent = document.getElementById('renewable-energy-info-content');

    const content = `
        <div class="section">
            <h3>1. Introduction to Renewable Energy</h3>
            <p>Renewable energy comes from natural sources that are replenished constantly, such as sunlight, wind, water, and geothermal heat.</p>
            <p>Importance: Renewable energy addresses climate change, reduces dependence on fossil fuels, and promotes energy security.</p>
            <h4>Global Renewable Energy Overview:</h4>
            <ul>
                <li>In 2022, renewables made up about 29% of global electricity production.</li>
                <li>The renewable energy market is projected to grow at a compound annual growth rate (CAGR) of over 8% through 2030.</li>
            </ul>
        </div>

        <div class="section">
            <h3>2. Types of Renewable Energy</h3>
            <h4>Solar Energy:</h4>
            <ul>
                <li>How photovoltaic cells and concentrated solar power (CSP) work.</li>
                <li>Stats: Solar energy accounts for 4% of global electricity generation and is expected to grow exponentially, reaching 1 TW of capacity globally in 2023.</li>
                <li>Key countries: China, USA, and India lead in solar energy adoption.</li>
            </ul>
            <h4>Wind Energy:</h4>
            <ul>
                <li>Wind turbines convert kinetic energy from wind into electricity.</li>
                <li>Stats: Wind energy provided 7% of the world's electricity in 2022, with a total installed capacity of over 800 GW.</li>
                <li>Offshore vs. onshore wind: Offshore wind is more expensive but has higher capacity potential.</li>
                <li>Key regions: Europe, China, and the USA are global leaders in wind energy.</li>
            </ul>
            <h4>Hydropower:</h4>
            <ul>
                <li>Uses water flow to generate electricity; the oldest and largest source of renewable energy.</li>
                <li>Stats: Hydropower accounted for about 16% of global electricity production in 2022, with over 1,300 GW of installed capacity.</li>
                <li>Key projects: The Three Gorges Dam in China is the largest hydropower plant in the world.</li>
            </ul>
            <h4>Biomass Energy:</h4>
            <ul>
                <li>Organic materials like wood, waste, and agricultural residues are burned or converted into biogas for energy.</li>
                <li>Stats: Biomass provides about 10% of global energy, mainly in developing regions.</li>
                <li>Potential and challenges: Biomass is considered carbon-neutral, but deforestation and land use concerns exist.</li>
            </ul>
            <h4>Geothermal Energy:</h4>
            <ul>
                <li>Harnesses heat from the Earth's core to produce electricity or for direct heating.</li>
                <li>Stats: Geothermal capacity is over 15 GW worldwide, with the U.S., Philippines, and Indonesia as leading producers.</li>
                <li>Geothermal heating systems: Geothermal energy is also used for residential and industrial heating purposes.</li>
            </ul>
            <h4>Ocean Energy:</h4>
            <ul>
                <li>Tidal and wave energy technologies are still in early stages but have great potential.</li>
                <li>Stats: While ocean energy technologies are not yet widely deployed, they could provide a significant future contribution, with estimates suggesting over 1,000 GW of global potential.</li>
            </ul>
        </div>

        <div class="section">
            <h3>3. Benefits of Renewable Energy</h3>
            <h4>Environmental Benefits:</h4>
            <ul>
                <li>Reduces greenhouse gas emissions: Renewable energy can reduce up to 90% of CO2 emissions compared to fossil fuels.</li>
                <li>Decreases air and water pollution: Switching to renewables improves air quality and reduces water usage in energy production.</li>
            </ul>
            <h4>Economic Benefits:</h4>
            <ul>
                <li>Job creation: The renewable energy sector employed over 12 million people globally in 2022, with solar and wind leading employment.</li>
                <li>Cost savings: Renewable energy costs have dropped significantly—solar PV prices dropped by over 80% in the last decade, and wind power prices have dropped by 70%.</li>
                <li>Energy independence: Countries that invest in renewables reduce their reliance on imported fuels, stabilizing energy prices.</li>
            </ul>
            <h4>Energy Security:</h4>
            <p>Renewables provide a diversified and more resilient energy supply, reducing vulnerability to fuel price fluctuations.</p>
        </div>

        <div class="section">
            <h3>4. Challenges and Limitations of Renewable Energy</h3>
            <h4>Intermittency and Reliability:</h4>
            <ul>
                <li>Solar and wind energy are weather-dependent, which can lead to fluctuating power supply.</li>
                <li>Solutions: Battery storage, grid modernization, and energy diversification to balance supply.</li>
            </ul>
            <h4>Energy Storage:</h4>
            <ul>
                <li>Current energy storage technologies are still expensive, though battery storage prices are falling.</li>
                <li>Emerging solutions: Lithium-ion batteries, pumped hydro storage, and advancements in hydrogen storage.</li>
            </ul>
            <h4>High Initial Costs:</h4>
            <ul>
                <li>While renewable energy is becoming cheaper, the upfront costs for infrastructure (solar panels, wind turbines) can still be high.</li>
                <li>Importance of government subsidies and incentives to offset these costs.</li>
            </ul>
            <h4>Land and Resource Use:</h4>
            <ul>
                <li>Solar and wind farms require large amounts of land, which may lead to conflicts over land use.</li>
                <li>Hydropower projects can impact ecosystems and biodiversity.</li>
            </ul>
        </div>

        <div class="section">
            <h3>5. Global Renewable Energy Adoption</h3>
            <h4>Leading Countries:</h4>
            <ul>
                <li>China is the world's largest investor in renewable energy, with over 40% of global renewable capacity.</li>
                <li>Europe has ambitious renewable energy targets, with countries like Germany and Denmark leading in wind and solar adoption.</li>
                <li>The USA is rapidly increasing its renewable capacity, aiming for 100% clean electricity by 2035.</li>
            </ul>
            <h4>Renewable Energy Targets:</h4>
            <ul>
                <li>By 2030, renewables are expected to account for over 50% of global electricity generation.</li>
                <li>Countries like Costa Rica and Iceland already generate nearly 100% of their electricity from renewables.</li>
            </ul>
            <h4>Corporate Renewable Energy Commitments:</h4>
            <ul>
                <li>Major corporations like Google, Apple, and Amazon have pledged to run their operations entirely on renewable energy.</li>
                <li>The growth of Power Purchase Agreements (PPAs) where companies buy renewable energy directly from producers.</li>
            </ul>
        </div>

        <div class="section">
            <h3>6. Policy and Government Support</h3>
            <h4>Subsidies and Incentives:</h4>
            <ul>
                <li>Many governments offer tax credits, rebates, and incentives for solar installations, wind farms, and electric vehicles.</li>
                <li>Feed-in tariffs and renewable energy certificates (RECs) encourage investment in green energy.</li>
            </ul>
            <h4>International Climate Agreements:</h4>
            <ul>
                <li>The Paris Agreement, signed by 197 countries, sets global targets for reducing carbon emissions, largely through renewable energy.</li>
                <li>The European Green Deal aims for carbon neutrality by 2050, with a major focus on renewable energy expansion.</li>
            </ul>
        </div>

        <div class="section">
            <h3>7. Innovations in Renewable Energy</h3>
            <h4>Advanced Solar Technologies:</h4>
            <p>Innovations like perovskite solar cells could significantly improve solar energy efficiency and lower costs.</p>
            <h4>Offshore Wind:</h4>
            <p>Floating wind turbines allow for offshore wind farms in deeper waters, increasing the available areas for wind energy production.</p>
            <h4>Green Hydrogen:</h4>
            <p>Hydrogen produced from renewable energy (green hydrogen) is seen as a key future energy source, especially for heavy industries and long-distance transport.</p>
            <h4>Energy Storage:</h4>
            <p>Battery technologies, such as Tesla's Powerwall and other grid-scale storage solutions, are evolving to store renewable energy more efficiently.</p>
            <h4>Smart Grids:</h4>
            <p>Smart grids allow for better management of renewable energy, balancing supply and demand, and integrating distributed energy resources (DERs).</p>
        </div>

        <div class="section">
            <h3>8. Renewable Energy for Transportation</h3>
            <h4>Electric Vehicles (EVs):</h4>
            <ul>
                <li>EVs are powered by renewable energy and reduce emissions compared to traditional gasoline vehicles.</li>
                <li>Stats: Global EV sales reached over 10 million units in 2022, and EVs are expected to make up over 40% of new car sales by 2030.</li>
            </ul>
            <h4>Hydrogen-Powered Vehicles:</h4>
            <p>Hydrogen fuel cells are being developed for use in cars, trucks, and even planes, providing an alternative to electric batteries.</p>
            <h4>Sustainable Public Transportation:</h4>
            <p>Renewable energy is increasingly used to power public transportation systems, such as electric buses and trains.</p>
        </div>

        <div class="section">
            <h3>9. Community and Small-Scale Renewable Energy Solutions</h3>
            <h4>Residential Solar Panels:</h4>
            <ul>
                <li>Rooftop solar installations allow homeowners to generate their own electricity and sell excess energy back to the grid.</li>
                <li>Stats: The cost of residential solar has dropped to $2.75 per watt, making it more affordable.</li>
            </ul>
            <h4>Community Solar:</h4>
            <p>Shared solar power systems for neighborhoods or communities, allowing those who can't install solar panels to benefit from renewable energy.</p>
            <h4>Energy Cooperatives:</h4>
            <p>Locally-owned energy cooperatives are increasingly developing small-scale renewable energy projects, empowering communities to control their energy sources.</p>
        </div>

        <div class="section">
            <h3>10. The Future of Renewable Energy</h3>
            <h4>Projected Growth:</h4>
            <p>By 2050, renewables could supply 85-90% of global electricity, according to IRENA.</p>
            <h4>Decentralized Energy Systems:</h4>
            <p>Microgrids and local renewable energy production are expected to play a larger role in the global energy landscape, reducing the need for centralized power plants.</p>
            <h4>Energy Equity:</h4>
            <p>Renewable energy is increasingly seen as a way to provide electricity to underserved or remote communities, particularly in developing regions.</p>
        </div>

        <div class="section">
            <h3>Key Statistics</h3>
            <ul>
                <li>Renewable energy made up 29% of global electricity generation in 2022.</li>
                <li>Solar and wind are now the cheapest sources of new electricity generation in most parts of the world.</li>
                <li>By 2030, over 90% of new electricity generation is expected to come from renewables.</li>
                <li>Renewable energy investments reached a record $495 billion globally in 2022.</li>
                <li>Countries like Denmark and Portugal generate over 50% of their electricity from renewable sources.</li>
                <li>Over 80% of new power capacity added in 2022 came from renewable energy.</li>
            </ul>
        </div>
    `;

    

    renewableEnergyInfoContent.innerHTML = content;

    renewableEnergyInfoBtn.addEventListener('click', function() {
        renewableEnergyInfoBtn.classList.toggle('open');
        renewableEnergyInfoContent.classList.toggle('hidden');
        renewableEnergyInfoContent.classList.toggle('show');

        if (renewableEnergyInfoContent.classList.contains('show')) {
            renewableEnergyInfoBtn.textContent = 'Hide Renewable Energy Information';
        } else {
            renewableEnergyInfoBtn.textContent = 'Learn More About Renewable Energy';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [
      {
        name: "Anushka Kumari",
        role: "Project Lead",
        description: "GREAT INTROSPECTION ON SUCH AN INTRICATE TOPIC.",
        contribution: "Lead the team in all aspects.Helped the team overcome most of the challenges,supervision of tech part and writing of report.",
        image: "anushka.jpg"
      },
      {
        name: "Aryan",
        role: "Researcher",
        description: "LEARNED MANY NEW THINGS ABOUT THIS FIELD.",
        contribution: "Did some of the Research Part.Wrote the manual and helped write the Report.",
        image: "aryan.jpg"
      },
      {
        name: "Raj Kumar Paul",
        role: "Tech Lead",
        description: "GREAT TEAM SYNERGY.",
        contribution: "Developed the website and also helped in reserch.",
        image: "raj2.jpg"
      }
    ];
  
    let currentMember = 0;
  
    const memberName = document.getElementById('member-name');
    const memberImage = document.getElementById('member-image');
    const memberRole = document.getElementById('member-role');
    const memberDescription = document.getElementById('member-description');
    const memberContribution = document.getElementById('member-contribution');
    const prevButton = document.getElementById('prev-member');
    const nextButton = document.getElementById('next-member');
    const indicatorsContainer = document.getElementById('member-indicators');
  
    function updateMemberDisplay() {
      const member = teamMembers[currentMember];
      memberName.textContent = member.name;
      memberImage.src = member.image;
      memberImage.alt = `Photo of ${member.name}`;
      memberRole.textContent = member.role;
      memberDescription.textContent = member.description;
      memberContribution.textContent = member.contribution;
  
      updateIndicators();
    }
  
    function updateIndicators() {
      indicatorsContainer.innerHTML = '';
      teamMembers.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentMember) {
          indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
      });
    }
  
    function nextMember() {
      currentMember = (currentMember + 1) % teamMembers.length;
      updateMemberDisplay();
    }
  
    function prevMember() {
      currentMember = (currentMember - 1 + teamMembers.length) % teamMembers.length;
      updateMemberDisplay();
    }
  
    prevButton.addEventListener('click', prevMember);
    nextButton.addEventListener('click', nextMember);
  
    // Initialize the display
    updateMemberDisplay();
  });